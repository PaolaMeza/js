var i = 10;
var nombre = 'Paola';

var f = function (){
	alert('Saludar');
}

var app = {
	contar : function(){
		for (var i = o; i < 100; i++){
			alert('Contador '+i);
		};
	},
	par:function(num){
		if (num%2==0){
			return true;
		}else{
			return false;
		}
	},
	ciclo:function(){
		for (var i=i; i<=10; i++){
			if (this.par(i)) {
				alert(i+' es par');
			}
			else{
				alert(i+' es impar')
			}
		}
	}
}
app.ciclo();