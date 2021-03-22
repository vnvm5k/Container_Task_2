export default class ErrorRepository {
	constructor() { 
        this.codes = new Map();
        this.codes.set(404, 'Not found');
		this.codes.set(500, 'Server is not working');
    }
    
    translate(code) {
    	if (!this.codes.has(code)) throw new Error('Unknown error');
    	return this.codes.get(code); 
    }
}