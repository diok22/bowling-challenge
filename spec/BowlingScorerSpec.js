describe('BowlingScorer',function(){
  var scorer;

  beforeEach(function(){
    scorer = new BowlingScorer();
  });

  it('starts with a score of zero',function(){
    expect(scorer.score()).toEqual(0);
  });

  it('can score a gutter game',function(){
    for(var i=0;i<10;i++){
      scorer.addFrame(0,0);
    }
    expect(scorer.score()).toEqual(0);
  });

  it('can score a single frame with a single roll', function(){
    scorer.addFrame(3,0);
    expect(scorer.score()).toEqual(3);
  });

  it('can score a single frame with two rolls', function(){
    scorer.addFrame(3,6);
    expect(scorer.score()).toEqual(9);
  });

  it('can score multiple frames with multiple rolls', function(){
    scorer.addFrame(3,6);
    scorer.addFrame(2,4);
    expect(scorer.score()).toEqual(15);
  });

  it('can score multiple frames with a spare', function(){
    scorer.addFrame(7,3);
    scorer.addFrame(4,2);
    expect(scorer.score()).toEqual(20);
  });

  it('can score multiple frames with a strike', function(){
    scorer.addFrame(10,0);
    scorer.addFrame(4,2);
    expect(scorer.score()).toEqual(22);
  });

  it('can score multiple frames with multiple spares', function(){
    scorer.addFrame(7,3);
    scorer.addFrame(4,6);
    scorer.addFrame(4,2);
    expect(scorer.score()).toEqual(34); 
  });

  it('can score a double', function(){
    scorer.addFrame(10);
    scorer.addFrame(10);
    scorer.addFrame(9,0);
    expect(scorer.score()).toEqual(57); 
  });

  it('can score a turkey', function(){
    scorer.addFrame(10);
    scorer.addFrame(10);
    scorer.addFrame(10);
    scorer.addFrame(0,9);
    expect(scorer.score()).toEqual(78); 
  });

  it('can score a perfect game', function(){
    for(var i=0;i<9;i++){
      scorer.addFrame(10);
    }
    scorer.addFrame(10,10,10);
    expect(scorer.score()).toEqual(300);
  });

});

