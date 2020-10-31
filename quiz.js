quiz1= [
	{
	 question: "What is the most common computer language?",
	 options: ["Java","R","Python","C++"],
	 answer: "Java"

 },
 {
	 question: "Public static void (what goes in here)",
	 options: ["String[]args","String args[]","Boolean [args]","String[args]"],
	 answer:"String[]args"

 },
 {
	question: "what is the size of a double variable?",
	options: ["8bit","16bit","32bit","64bit"],
	answer: "64bit"

 },
 {
	question: "What is the default value of byte variable?",
	options: ["0","0.0","null","undefined"],
	answer: "0"

 },
 {
	question: "Which method must be implemented by all threads?",
	options: ["run()","wait()","start()","wait()"],
	answer: "run()"

 },
 {
	question: "Which of the following creates a List of 3 visible items and multiple selections abled?",
	options: ["new List(false, 3)","new List(3, true)","new List(true, 3)","new List(3, false)"],
	answer: "new List(3, true)"

 },

 {
	question: "Which of the following is true about the anonymous inner class?",
	options: ["It has only methods","Objects can't be created","It has a fixed class name","It has no class name"],
	answer: "It has no class name"

 },
 {
	question: "Which package contains the Random class?",
	options: ["java.util package","java.lang package","java.awt package","java.io package"],
	answer: "java.util package"

 },
 {
	question: " which memory a String is stored, when we create a string using new operator?",
	options: ["Stack","String memory","Heap memory","Random storage space"],
	answer: "Heap memory"

 },
 {
	question: "What is the initial quantity of the ArrayList list?",
	options: ["5","10","0","100"],
	answer: "10"

 },
 {
	question: "Which of the following is a mutable class in java?",
	options: ["java.lang.String","java.lang.Byte","ava.lang.Short","java.lang.StringBuilder"],
	answer: "java.lang.StringBuilder"

 },
 {
	question: "How many threads can be executed at a time?",
	options: ["Only one thread","Multiple threads","Only main (main() method) thread","Two threads"],
	answer: "Multiple threads"

 },
 {
	question: "What does html stand for?",
	options: ["Home Tool Markup Language","Hyperlinks and Text Markup Language","Hyper Text Markup Language","html"],
	answer: "Hyper Text Markup Language"

 },
 {
	question: "What is the correct sequence of HTML tags for starting a webpage?",
	options: ["Head, Title, HTML","Title, Head, HTML","HTML, Head, Title","head shoulders knees and toes"],
	answer: "HTML, Head, Title"

 },
 {
	question: " What is the correct HTML tag for inserting a line break?",
	options: ["Br","Break","Lb","bk"],
	answer: "Br"

 },
 {
	question: "How can you make a list that lists the items with numbers?",
	options: ["Ol","Dl","Ul","List"],
	answer: "Ol"

 },
 {
	question: "which course is this?",
	options: ["CUS1163","CUS1189","CUS1116","CUS1172"],
	answer: "CUS1172"

 },
 {
	question: "Which type  would you use to declare a number with a decimal ",
	options: ["long","int","String","double"],
	answer: "double"

 },
 {
	question: "Trick question: how much did you enjoy this?",
	options: ["alot ","loved it","loved it^2","a,b,& c"],
	answer: "a,b,& c"

 }
 ]



const state = {
   currentQuestions : 0,
	 currentScore:0,
	 currentView: ""

};



 function handle_click(e) {

if(e.target.dataset.start =="Start"){
	console.log("start")
selection = document.querySelector("#quiz_selector").value;
	if (selection== 1){
		state.currentQuiz =0
		render_view("#quiz_view",1);



}
}
	if (e.target.dataset.answer == quiz1[state.currentQuestions].answer) {
      // update state
		render_view("#showfeedback",1);
			state.currentQuestions = state.currentQuestions + 1;
state.currentScore= state.currentScore +1;
render_view("#quiz_view",1);
state.currentView = "#showfeedback";


if(quiz1[state.currentQuestions]== quiz1[18]){
	console.log("reuslts");
	render_view("#qresults",1);
}


     // update view for feedback




}






//condition for next // // QUESTION:

		// use this for student name for form document.querySelector("form").innerhtml
}

document.addEventListener('DOMContentLoaded',()   => {
//creat_quiz_view(1) render_vie
render_view("#view_widget",1)
//  event delegation
 document.querySelector("#app_wid").onclick = (e) => {
		 handle_click(e);
	 }
});
var render_view = (view_id, model_index) => {
  console.log("Rendering View");

  var source = document.querySelector(view_id).innerHTML
  var template = Handlebars.compile(source);
	console.log(typeof(template));
	console.log(quiz1[0]);
	var html = template(quiz1[state.currentQuestions]);
	document.querySelector("#app_wid").innerHTML = html;

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

/**
//get index for quiz
const creat_quiz_view = async (quiz_idx)=>{

	const data = await fetch (https://github.com/jualston/QuizCreate/edit/main/db.json)
	const model = await data.json()
		const html_element = render_view('#opening')
		document.querySelector('#showthis').innerHTML=html_element;
		if appState.current_question == total_questions_in_quiz) { change the view}  )
		if (appState.current_view =='intro') {

 appState.current_view = "question_view";
render_widget(model,'#question_view');

}

if (appState.current_view =='question_view') && (appState.current_question== last_question_index ) {

appState.current_view = "results";

render_widget(model,'#results');

}


}
const handle_choice = (e) =>{
	//if statement that checks if the choice is the correct answer
// if e.target appstate current choice = 'correct_answer' appState.score +=1;
//else if display app.correct answer with  alert saying what is the right answer
}

const render_view =(view)=>{

	template_source = document.querySelector(view).innerHTML

	var template = Handlebars.compile(template_source);

var html_widget = template(model...appState)
console.log(html_widget)
return html_widget

const appState = {
    current_view : 'opening',
    current_question : 0,
    current_quiz : 0
		appState.current_question =  appState.current_question + 1 )

}
*/
