import React from "react";
import { Carousel } from "react-responsive-carousel";
import $ from 'jquery';

// export default () => (
//   <Carousel autoPlay infiniteLoop>
//     <div>
//       <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" alt = "test"/>
//       <p className="legend">Legend 1</p>
//     </div>
//     <div>
//       <img src="download.jpg" alt="pic1" />
//       <p className="legend">Legend 2</p>
//     </div>
//   </Carousel>
// );
// not used this component
export default () => (
  <Carousel />
  );

function test() {
  var data =
  [
  {
  "user":{"name":"zhaoyu"},
  "record":[{
    "video":"test.mp4",
    "text":"shirt",
    "pic":"download.jpg"
  }],
  "others":[]
  },
  {
  "user":{"name":"yuzhao"},
  "record":[{
    "video":"test2.mp4",
    "text":"Sweater",
    "pic":"download_2.jpg"
  }],
  "others":[]
}
  ];

  // var imageCount = 2;
  var currentImage = 0;
  function selfChangeImage() {
    console.log(currentImage);
    document.getElementById("t0").innerHTML = "Hello " + data[currentImage].user.name;
    document.getElementById("t1").src = data[currentImage].record[0].video;
    document.getElementById("tvideo").load();
    document.getElementById("tvideo").onended=selfChangeImage;
    document.getElementById("t2").innerHTML = data[currentImage].record[0].text;
    document.getElementById("t3").style.background = "url("+ data[currentImage].record[0].pic +") repeat";

    if (currentImage < 1){
            currentImage ++ ;
        } else {
            currentImage = 0;
        }
    console.log(currentImage);
    // setTimeout(selfChangeImage, 4000); // run every 4s
    // selfChangeImage()
  }
  selfChangeImage();

}

test();