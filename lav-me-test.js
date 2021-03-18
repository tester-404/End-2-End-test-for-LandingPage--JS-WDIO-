import { long3500, med1500, s500 } from "../lib/timeouts"

describe('E2E for Test Task Landing page - Lavin Media', () => {
	it('Should open a test page and check the the webpage title', () => {
		browser.maximizeWindow()
		browser.url('https://www.lavinmedia.com/test-task/')
		expect(browser).toHaveUrl('https://www.lavinmedia.com/test-task/');
		expect(browser).toHaveTitle('Lavin Media | QA test task');
	})

	it('Check that the title is visible and has the expected text', () => {
		const titleText = $('section.section.pt-3.pt-lg-2:nth-child(3) div.container-md div.hero div.blockTitle.mb-3.mb-sm-4 > div.blockTitle__hdr.mb-2')
		titleText.waitForExist()
		expect(titleText).toBeVisible()
		expect(titleText).toHaveText('Here’s Why So Many Seniors Have Added This Walk-In Bath In 2020...')
		browser.pause(s500)
	})

	it('Should set screen size 1440x900 and take a screenshot', () => {
		browser.setWindowSize(1440, 900)
		browser.saveScreenshot('test1-1440x900.png')
		browser.pause(s500);
	})

	it('Should set screen size 960x640 and take a screenshot', () => {
		browser.setWindowSize(960, 640)
		browser.saveScreenshot('test2-960x640.png')
		browser.pause(s500);
	})

	it('Should set screen size 480x320 and take a screenshot', () => {
		browser.setWindowSize(480, 320)
		browser.saveScreenshot('test3-480x320.png')
		browser.pause(s500);
	})

	it('Shouls find the Gallery section and press 5 times on the arrow for changing photos', () => {
		browser.maximizeWindow()
		const nextButton = $('body > section:nth-child(7) > div > div.row > div > div > div.sliderDefault > div > button.slick-next.slick-arrow')
		nextButton.waitForExist()
		nextButton.click()
		browser.pause(s500)
		nextButton.click()
		browser.pause(s500)
		nextButton.click()
		browser.pause(s500)
		nextButton.click()
		browser.pause(s500)
		nextButton.click()
		browser.pause(s500)
	})

	it('Shouls click the Next button and get an error message "Enter your ZIP code."', () => {
		const noZip = $('#form-container-1 > div.steps.step-1 > form > div.row > div.col-12.mt-3.mt-md-4.pt-2 > div > button')
		noZip.waitForExist()
		noZip.click()
		browser.pause(s500)
		const errorZipMassage = $('#form-container-1 > div.steps.step-1 > form > div.row > div.col-12.pt-4 > div > div > div.helpBlock > div')
		errorZipMassage.waitForExist()
		expect(errorZipMassage).toHaveText('Enter your ZIP code.')
		browser.pause(med1500)
	})

	it('Shouls enter the valid Zip code, press the "Next" button, and go to the next screen', () => {
		const inputZip = $('#form-container-1 > div.steps.step-1 > form > div.row > div.col-12.pt-4 > div > div > div.inputBlock__wrap > input')
		inputZip.waitForExist()
		inputZip.setValue('47005')
		const okZip = $('#form-container-1 > div.steps.step-1 > form > div.row > div.col-12.mt-3.mt-md-4.pt-2 > div > button')
		okZip.waitForExist()
		okZip.click()
		browser.pause(med1500)
	})

	it('Shouls select the options you need and click next', () => {
		const selectAll = $('#form-container-1 > div.steps.step-2 > div.row > div > div > form > div > div:nth-child(1) > div > div:nth-child(1) > div > label > span > i')
		selectAll.waitForExist()
		selectAll.click()
		browser.pause(med1500)
		const selectOkButton = $('#form-container-1 > div.steps.step-2 > div.row > div > div > form > div > div.col-12.mt-4.pt-2 > div > button')
		selectOkButton.waitForExist()
		selectOkButton.click()
	})

	it('Shouls select the type of property and click next', () => {
		const noProp = $('#form-container-2 > div.steps.step-3 > div.row > div > div > form > div > div.col-12.mt-4 > div > button')
		noProp.waitForExist()

		const xxx = $('#form-container-1 > div.steps.step-3 > div.row > div > div > form > div > div:nth-child(1) > div > div:nth-child(1) > div > label > span > i')
		const xxx5 = $('#homeowner-owned-2')
		xxx.waitForExist()
		browser.pause(long3500)
	})
	

})