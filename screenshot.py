from playwright.sync_api import sync_playwright
import time

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1280, "height": 720})
    page.goto('http://localhost:3000/')

    # Wait for the preloader to disappear if there is one
    page.wait_for_timeout(2000)

    # Disable animations
    page.add_style_tag(content="* { animation: none !important; transition: none !important; }")
    page.evaluate("document.querySelectorAll('[data-aos]').forEach(el => el.style.opacity = '1')")

    # Let terminal animation resolve slightly to see typing effect before we take screenshot
    time.sleep(3)

    # Expertise Grid
    element = page.locator('.expertise-section')
    element.scroll_into_view_if_needed()
    element.screenshot(path='expertise_grid_screenshot.png')


    browser.close()
