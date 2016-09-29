module.exports = function () {
    this.bemBlocks = this.bemBlocks || [];
    var bemBlockIndex= this.bemBlocks.length - 1,
        currentBemBlock = this.bemBlocks[bemBlockIndex],
        lastTokenIndex = this.tokens.length - 1,
        lastToken= this.tokens[lastTokenIndex];
    if (lastToken) {
        switch(lastToken.type){
            case 'class':
                if(lastToken.val.match(/^[a-zA-Z]/)){
                    this.bemBlocks.push(lastToken);
                } else if (currentBemBlock && lastToken.val.match(/^\-/)){
                    this.tokens[lastTokenIndex].val = lastToken.val.replace(/^\-/, currentBemBlock.val + '--');
                } else if(currentBemBlock && lastToken.val.match(/^\_/)){
                    this.tokens[lastTokenIndex].val = lastToken.val.replace(/^\_/, currentBemBlock.val + '__');
                };
                break;
            case 'outdent':
                if(currentBemBlock && this.colno <= currentBemBlock.col) {
                    var poppedToken = this.bemBlocks.pop();
                }
                break;
            default:
                break;
        }
    }
}
