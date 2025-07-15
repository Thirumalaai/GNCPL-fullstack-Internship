js_content = 
console.log("Portfolio website loaded!");



(base_path / "index.html").write_text(html_content)
(base_path / "assets" / "css" / "style.css").write_text(css_content)
(base_path / "assets" / "js" / "script.js").write_text(js_content)


resume_src = Path("/mnt/data/ThirumalaaiM_InternshalaResume-18.pdf")
resume_dst = base_path / "ThirumalaaiM_InternshalaResume-18.pdf"
resume_dst.write_bytes(resume_src.read_bytes())
