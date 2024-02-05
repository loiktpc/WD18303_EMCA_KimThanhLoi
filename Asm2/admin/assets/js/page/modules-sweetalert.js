"use strict";

$("#swal-1").click(function() {
	swal('Hello');
});
// $("#swal-2").css("background-color", "yellow")
// $("#swal-2").click(function() {
// 	swal('Good Job', 'You clicked the button!', 'success');
// });

$("#swal-3").click(function() {
	swal('Good Job', 'You clicked the button!', 'warning');
});

$("#swal-4").click(function() {
	swal('Good Job', 'You clicked the button!', 'info');
});

$("#swal-5").click(function() {
	swal('Good Job', 'You clicked the button!', 'error');
});

// $(".swal-6").click(function() {
 
//   swal({
//       title: 'Bạn Chắc Chắn?',
//       text: 'Sau khi xóa, bạn sẽ không thể khôi phục tệp này!',
//       icon: 'warning',
//       buttons: true,
//       dangerMode: true,
//     })
//     .then((willDelete) => {
//       if (willDelete) {
//       swal('Tập tin tưởng tượng của bạn đã bị xóa!', {
//         icon: 'success',
//       });
//       } else {
//       swal('Tệp của bạn vẫn còn!');
//       }
//     });
// });

$("#swal-7").click(function() {
  swal({
    title: 'What is your name?',
    content: {
    element: 'input',
    attributes: {
      placeholder: 'Type your name',
      type: 'text',
    },
    },
  }).then((data) => {
    swal('Hello, ' + data + '!');
  });
});

$("#swal-8").click(function() {
  swal('This modal will disappear soon!', {
    buttons: false,
    timer: 3000,
  });
});