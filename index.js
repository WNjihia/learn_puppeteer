const puppeteer = require('puppeteer');
const credentials = require('./credentials').default;

const USERNAME_SELECTOR = '#login_field';
const PASSWORD_SELECTOR = '#password';
const BUTTON_SELECTOR = '#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block';

async function run(){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('https://github.com/login');
    await page.screenshot({path: 'screenshots/github.png'});

    await page.click(USERNAME_SELECTOR);
    await page.keyboard.type('credentials.username');
    await page.click(PASSWORD_SELECTOR);
    await page.keyboard.type(credentials.password);
    await page.click(BUTTON_SELECTOR);

    await browser.close();
};

run();