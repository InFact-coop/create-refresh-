from PIL import Image
from pathlib import Path


def add_watermark(input_path, watermark_path, output_path):
    """Add EU-compliant meme watermark to a supplied image"""
    try:
        original_image = Image.open(input_path)
        _original_width, original_height = original_image.size

        watermark_image = Image.open(watermark_path)
        watermark_width, watermark_height = watermark_image.size
        watermark_resized = watermark_image.resize(
            (230, 230))
        _resized_width, resized_height = watermark_resized.size

        original_image.thumbnail((1080, 1080))
        _w, h = original_image.size
        original_image.paste(watermark_resized, (8, h - resized_height - 8),
                             mask=watermark_resized)
        original_image.save(output_path)
        return "Success!"
    except IOError:
        return "Failure!"
