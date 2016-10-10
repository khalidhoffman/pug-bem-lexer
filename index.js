module.exports = function () {
    this.bemBlocks = this.bemBlocks || [];
    var currentBEMBlockIndex= this.bemBlocks.length - 1,
        currentBEMBlock = this.bemBlocks[currentBEMBlockIndex],
        currentTokenIndex = this.tokens.length - 1,
        currentToken= this.tokens[currentTokenIndex];
    if (currentToken) {
        switch(currentToken.type){
            case 'class':
                if(currentToken.val.match(/^[a-zA-Z]/) && !(currentBEMBlock && currentBEMBlock.line == currentToken.line)){
                    var prevToken = this.tokens[this.tokens.length -2];
                    if (prevToken && prevToken.type == 'class'){
                        // ignore secondary classes
                    } else {
                        this.bemBlocks.push(currentToken);
                    }
                } else if (currentBEMBlock && currentToken.val.match(/^\-/)){
                    this.tokens[currentTokenIndex].val = currentToken.val.replace(/^\-\-?/, currentBEMBlock.val + '--');
                } else if(currentBEMBlock && currentToken.val.match(/^\_/)){
                    this.tokens[currentTokenIndex].val = currentToken.val.replace(/^\_\_?/, currentBEMBlock.val + '__');
                }
                break;
            case 'outdent':
            case 'newline':
                if(currentBEMBlock && this.colno <= currentBEMBlock.col) {
                    this.bemBlocks.pop();
                }
                break;
            default:
                break;
        }
    }
};
