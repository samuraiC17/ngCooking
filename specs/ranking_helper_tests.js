describe('Helpers', function(){
	beforeEach(module('cookingApp'));
	
	describe('Ranking Helper',function(){
		var rankingHelper;
		beforeEach(inject(function(_rankingHelper_){
			rankingHelper=_rankingHelper_;
		}));
		
		it('doit retourner la description relative au niveau encountered a declaration exception',function(){
			expect(rankingHelper.setDescription(1)).toBe('Novice');
		});
		it('doit retourner la le nom et prénom séparés par "espace"',function(){
			expect(rankingHelper.setName('Samurai','C17')).toBe('Samurai C17');
		});
	});
});