$(function(){
	 var content = $("#task");

	 var tasksDiv = $("#tasks");

	 $("#add").click((e) => {
	 	var value = content.val();
	 	addTask(value);
	 })


	 function  addTask(value){
	 	var task = $("<div />");
	 	var h1 = $("<h1 />");
	 	h1.addClass("card-title");
	 	h1.append(value);
	 	task.addClass("card");
	 	task.addClass("col-sm-12");
	 	task.addClass("col-md-6");
	 	task.addClass("col-lg-6")
	 	task.addClass("m-4");
	 	task.css("padding", "30px");
	 	task.append(h1);
	    tasksDiv.append(task);
	 	addButton(task, "btn-success", "Completar");
	 	addButton(task,"btn-danger", "Deletar");
	 	addButton(task, "btn-info", "Retornar");
	 }

	 function addButton(task, btnClass, content){
	 	var button = $("<button />");
	 	button.addClass("btn");
	 	button.addClass("mb-3");
	 	button.addClass(btnClass);
	 	button.append(content); 
	 	button.attr("id", content);
	 	task.append(button);
	 	button.click(function(){
	 		if(content === "Deletar"){
	 			task.remove();
	 		}else if(content === "Completar"){
                task.addClass("bg-success");
                task.css("color", "white");
                $(this).hide();
                task.find("#Retornar").show();
	 		}else if(content === "Retornar"){
	 			task.removeClass("bg-success");
	 			task.css("color", "black");
	 			task.find("#Completar").show();
	 			$(this).hide();
	 		}
	 	})
	 	task.find("#Retornar").hide();
	 }
})