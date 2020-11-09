$(document).ready(function(){
  // Mensaje en la consola
  console.log('J Query is Working');
  
  $.ajax({
  url: 'php/chart.php',
  type: 'GET',
  success: function(r){
    let tasks = JSON.parse(r);
    let template = '';
    tasks.forEach(task =>{
      template += `
      <script type="text/javascript">
          google.charts.load('current', {'packages':['bar']});
                google.charts.setOnLoadCallback(drawChart);
                function drawChart() {
                  var data = google.visualization.arrayToDataTable([
                    ['nombre', 'cantidad', 'marca'],
                    ['${task.nombre}','${task.cantidad}','${task.marca}'],
                    ['2015', 1170, 460]
                  ]);
                  var options = {
                    chart: {
                      title: 'Company Performance',
                      subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                    }
                  };

                  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

                  chart.draw(data, google.charts.Bar.convertOptions(options));
          }
    </script> 
      `
    });

    $('#googleChart').html(template);
   }

  })


    $.ajax({
  url: 'php/chartPie.php',
  type: 'GET',
  success: function(r){
    let lists = JSON.parse(r);
    let plantilla = '';
    lists.forEach(list =>{
      plantilla += `
      <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['${list.nombre}',${list.cantidad}],
          ['Eat',      100],
          ['Commute',  220]
        ]);

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
    </script>
      `
    });

    $('#googleChartPie').html(plantilla);
   }

  })


});  












