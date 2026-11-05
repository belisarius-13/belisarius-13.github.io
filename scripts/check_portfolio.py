"""Check navigation, content safety, and static-only boundaries across the generated site."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
root = Path(__file__).resolve().parents[1] / 'portfolio'
class Page(HTMLParser):
 def __init__(self):
  super().__init__(); self.links=[]; self.ids=set(); self.csp=None; self.h1=0; self.inline=False
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a:
   assert a['id'] not in self.ids, f'Duplicate id: {a["id"]}'
   self.ids.add(a['id'])
  if tag=='h1': self.h1+=1
  if tag in ('a','link','script','img'):
   val=a.get('href',a.get('src'))
   if val: self.links.append(val)
  if tag=='script': assert a.get('src'), 'Inline script'
  assert not any(k.startswith('on') for k in a), 'Inline event handler'
  assert 'style' not in a, 'Inline CSS'
  if a.get('http-equiv')=='Content-Security-Policy': self.csp=a.get('content')
parsed={}
for path in root.glob('*.html'):
 p=Page(); p.feed(path.read_text()); parsed[path.resolve()]=p
 assert p.h1==1, f'{path}: expected one h1'
 assert p.csp and "default-src 'none'" in p.csp and "connect-src 'none'" in p.csp, f'{path}: missing CSP'
for path,page in parsed.items():
 for value in page.links:
  url=urlsplit(value)
  if url.scheme or url.netloc:
   assert url.scheme in ('https','mailto'), f'Unsafe URL: {value}'
   continue
  target=(root / unquote(url.path.lstrip('/')) if url.path.startswith('/') else path.parent / unquote(url.path)).resolve() if url.path else path
  if target.is_dir(): target=target/'index.html'
  assert target.exists(), f'{path.name}: broken link {value}'
  if url.fragment and target in parsed: assert url.fragment in parsed[target].ids, f'{path}: missing anchor {value}'
assert (root/'assets/joseph-taomhera-cv.pdf').read_bytes().startswith(b'%PDF'), 'Missing CV PDF'
assert 'REPLY BY EMAIL' in (root/'contact.html').read_text()
assert 'PLANNED' in (root/'projects.html').read_text()
assert (root/'CNAME').read_text().strip()=='belisarius13.com'
print(f'PASS: {len(parsed)} pages, internal links, anchors, CSP, no inline code, CV, booking disclosure, planned content and domain.')
# Required profile coverage and interactive affordances.
home = (root/'index.html').read_text()
for name in ['Cloud Security','Identity &amp; Access Controls','Windows Security','Detection Engineering','Azure Security','Threat Hunting','Incident Response']:
 assert name in home, f'Missing profile area: {name}'
assert home.count('class="focus-choice"') == 7
assert 'motion-toggle' in home and 'theme-toggle' in home
assert 'assets/joseph-anime.webp' in home
assert (root/'assets/joseph-anime.webp').read_bytes()[8:12] == b'WEBP'
print('PASS: seven focus areas, portrait asset, theme and motion controls.')

# Contact submits to the mail relay without launching an email client.
contact = (root/'contact.html').read_text()
assert 'action="https://formspree.io/f/xwllzrlp" method="POST"' in contact
assert 'type="email" name="email" autocomplete="email" required' in contact
assert 'name="_honey"' not in contact
assert 'name="_captcha"' not in contact, 'Keep provider CAPTCHA enabled'
assert "location.href = `mailto:" not in (root/'assets/site.js').read_text()
for path, page in parsed.items():
 assert ("form-action https://formspree.io;" if path.name == 'contact.html' else "form-action 'none';") in page.csp
print('PASS: direct POST, required reply address, spam controls, scoped form-action policy.')
