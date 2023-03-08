describe('Example of Cypress UI tests using the Nimble website', () => {
	
	it('should visit the homepage', () => {
		cy.visit('/');
		cy.get('.vc_custom_heading')
			.should('exist');
	});

	it('should navigate to the testing page', () => {
		//TODO
	});

});