import fitz  # PyMuPDF
import sys
import os

pdf_path = sys.argv[1]
out_dir = sys.argv[2]

print(f"Opening {pdf_path}")
doc = fitz.open(pdf_path)
for page_index in range(len(doc)):
    page = doc[page_index]
    image_list = page.get_images()
    print(f"Found {len(image_list)} images on page {page_index}")
    for image_index, img in enumerate(image_list, start=1):
        xref = img[0]
        pix = fitz.Pixmap(doc, xref)
        # Convert to standard format if needed
        if pix.n - pix.alpha > 3:
            pix = fitz.Pixmap(fitz.csRGB, pix)
            
        out_path = os.path.join(out_dir, f"raheel-kaleem.jpg")
        pix.save(out_path)
        print(f"Saved {out_path}")
        sys.exit(0) # Just grab the first one
