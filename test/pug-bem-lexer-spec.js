const pug = require('pug'),
	chai = require('chai'),

	expect = chai.expect;

describe('BEMPugLexer', function () {

	it('can replace the default pug lexer', function () {
		const testPugTxt = `.block.__child Hello World`;

		const result = pug.render(testPugTxt, {
			plugins: [
				{
					lex: require('../')
				}
			]
		});

		expect(result).to.be.a('string');
		expect(result).to.eql('<div class="block block__child">Hello World</div>');
	})
});
