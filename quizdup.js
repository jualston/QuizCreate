



const appState = {
currentQuestions : 0,
currentView : "#_widget",
currentQuiz: 0
}



 function handle_click(e) {

if(e.target.dataset.start =="Start"){
	console.log("start")
selection = document.querySelector("#quiz_selector").value;
	if (selection== 1){
render_view("#quiz_view");




}
creat_quiz_view(1)
}
}
// code for correct answer








//condition for next // // QUESTION:

		// use this for student name for form document.querySelector("form").innerhtml


document.addEventListener('DOMContentLoaded',()   => {
creat_quiz_view(1)

//  event delegation
 document.querySelector("#app_wid").onclick = (e) => {
		 handle_click(e);
	 }
});
const render_view = (view_id, model) => {
  console.log("Rendering View");

  var source = document.querySelector(view_id).innerHTML
  var template = Handlebars.compile(source);
	console.log(typeof(template));

	var html_widget = template(model)
	return html_widget



//	var buttons=view_widget.querySelectorAll("button")
	//buttons.forEach((button, i) => {
	//	console.log(button);
	//	button.addEventListener("click",() =>{
		//	console.log(button.dataset.answer);
		//	console.log("clicked")
	//	if(button.innerHTML.options.[0])=quiz1[0].answer){
	//			console.log("correct")
	//	}
			//check to see if right answer checking the content of the button
		//});
	//});




}


//get index for quiz
const creat_quiz_view = async (quiz_idx)=>{

	const data = await fetch ("https://my-json-server.typicode.com/jualston/QuizCreate/questions")
	const model = await data.json()
	console.log("loaded");
		const html_element = render_view("#view_widget", model)
		document.querySelector("#app_wid").innerHTML=html_element;





}
