var res = fetch("https://data.covid19india.org/v4/min/timeseries.min.json")
.then((data)=>data.json()).then((data1)=>{
  for(let i in data1){
    
    for(let j in data1[i].dates){
     
      var div = document.createElement("div");
        div.setAttribute("class","box");
        div.innerHTML = `
        <div class="container">
        <div class="row">
          <div class="col-md-4">
              <div class="card text-center m-1 mt-5">
                <div class="card-body">
                <p class="card-text">Date: ${j}</p>
                <p class="card-text">Confirmed: ${data1[i].dates[j].total.confirmed}</p>
                <p class="card-text">Deceased: ${data1[i].dates[j].total.deceased}</p>
                <p class="card-text">Recovered: ${data1[i].dates[j].total.recovered}</p>
                <p class="card-text">Tested: ${data1[i].dates[j].total.tested}</p>
              </div>
          </div>
        </div>
      </div>`

      document.body.append(div);
    }  
}
}).catch(error=>{
  console.log("Data isn't defined");
  
})



