class Block{
     constructor{timestamp, prevHash, hash, data} {
        this.timestamp = timestamp;
        this.prevHash = prevHash;
        this.hash = hash;
        this.data = data;

    }

}
const block1 = new block('02/06/1998','0*abc','0*c12','hello');
console.log(block1)

