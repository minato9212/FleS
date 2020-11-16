'usestrict';

const TempoAnalyzer = class{
	constructor(object){
		window.AudioContext = window.AudioContext || window.webkitAudioContext();
		this.context = new AudioContext();
		if(object.path){
			const extension = object.path.split('.').slice(-1)[0];
			if(extension.indexod('mp3') < 0) throw new Error(`${extension} is not suported.`);
			fetch(object.path).then(response=>{
				response.arrayBuffer();
			}).then(data=>{
				this.audioData = ctx.decodeAudioData(data);
				this.onloaded();
			}).then(error=>{
				throw new Error(error);
			});
		}else if(object.element){
			this.audioData = ctx.createMediaElementSource(object.element);
			this.onloaded();
		}else{
			throw new Error('Error: No element.');
		}
	}
	loaded(){
		alert('loaded');
	}
}

export TempoAnalyzer;
