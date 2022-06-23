import html2canvas from 'html2canvas'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';



const SloganCard = (props) => {

  
  const shareImage= async(blob)=> {
    /*
    const response = await fetch(image);
    // here image is url/location of image
    const blob = await response.blob();
    */
    const file = new File([blob], 'share.png', {type: blob.type});
    if(navigator.share) {
      await navigator.share({
        title: props.title,
        text: props.text,
        files:[blob]
        
      })
        .then(() => console.log('Successful share'))
        .catch((error) => alert('Error in sharing', error));
    }else {
      //alert(`system does not support sharing files.`);
    }
  }



  const exportAsPicture = () => {
    var html = document.getElementsByTagName('HTML')[0]
    var body = document.getElementsByTagName('BODY')[0]
    var htmlWidth = html.clientWidth;
    var bodyWidth = body.clientWidth;

    var data = document.getElementById('exportContainer')
    var newWidth = data.scrollWidth - data.clientWidth


    if (newWidth > data.clientWidth) {
      htmlWidth += newWidth
      bodyWidth += newWidth
    }

    html.style.width = htmlWidth + 'px'
    body.style.width = bodyWidth + 'px'


    html2canvas(data).then((canvas) => {
      var image = canvas.toDataURL('image/png', 1.0);
      return image
    }).then((image) => {
      if(props.exportMode=="download")
        saveAs(image, `${props.title}-${Date.now().toString().slice(0,7)}.png`);
      if(props.exportMode=="share")
        shareImage(image);
      props.onExported();
      html.style.width = null
      body.style.width = null
    })
  }

  const saveAs = (blob, fileName) => {
    var elem = window.document.createElement('a');
    elem.href = blob
    elem.download = fileName;
    elem.style = 'display:none;';
    (document.body || document.documentElement).appendChild(elem);
    if (typeof elem.click === 'function') {
      elem.click();
    } else {
      elem.target = '_blank';
      elem.dispatchEvent(new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      }));
    }
    URL.revokeObjectURL(elem.href);
    elem.remove()
  }

  useEffect(async () => {

    if(props.exportMode=="download"){
      exportAsPicture();
    }

  },[props.exportMode]);

  return (
    <>

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"></meta>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400&display=swap" rel="stylesheet" />
      </Head>

      <div className="relative px-4 py-6" style={{position: 'absolute', opacity: 0, pointerEvents:'none'}} >
        
        <div className="max-w-md mx-auto align-middle items-center ">

          <div className="py-1 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 mt-4" id="exportContainer">
          <img
            src="/img/bk-logo-2.png"
            className="w-3/5 pl-2 md:mt-1 align-middle text-center align-center"
          />


            <div className=" flex-auto p-2 align-middle text-left  min-h-full rounded-md bg" >
              <div>
                <h1 className="text-center text-indigo-900 font-Inter  text-2xl" >Special Blessings</h1>
                <h3 className="text-center text-indigo-900 font-Inter  text-xl" >Received on the occasion of Avyakth Smrithi Divas (Jan 18) - 2022</h3>
                <h4 className="text-center text-lime-900 font-Inter  text-xl">{props.cardInfo.centre_disp_name}</h4>
              </div>
              <div className="min-w-screen  flex items-center justify-center px-2 py-5" >
                <div className="w-full mx-auto border-4 rounded-lg bg-white px-5 pt-5 pb-10 text-gray-800"  >
                  <div className="w-full h-auto mb-4">
                    <div className="w-full pt-1 pb-0 -mt-1 ">
                      <img src="/img/baba-3d.png" class="hidden"/>
                    </div>
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
														<div className="float-left   transform rotate-90"><img width="65" src="/img/border-card-lime.png" /></div>
														<div className="float-right  transform rotate-180"><img width="65" src="/img/border-card-lime.png" /></div>
													</div>
                    <p className="text-md text-lime-900 pt-5 font-semibold text-center mt-1  font-Inter">
                    {props.cardInfo.disp_name}
                    </p>
                  </div>
                  <div className="w-full mb-1">
                    <div className="text-3xl text-gray-500 text-left leading-tight h-3 hidden">“</div>
                    <p className="text-lg font-semibold text-gray-600 text-center px-5">
                    “{props.cardInfo.slogan}”
                    </p>
                    <div className="relative py-1 sm:max-w-xl sm:mx-auto">
                    <div className="float-left   "><img width="65" src="/img/border-card-lime.png" /></div>
                    <div className="float-right  transform -rotate-90"><img width="65" src="/img/border-card-lime.png" /></div>
                    </div>

                    <div className="text-3xl text-gray-500 text-right leading-tight h-3 -mt-3 hidden">”</div>
                  </div>
                </div> 
            
              </div>
              <div className="text-xs mx-2 px-2 text-gray-500 -mt-4 ">
                    <i>{dayjs(props.cardInfo.timestamp).format('DD-MMM-YYYY hh:mm')} </i>
              </div>
              
            </div>
            
          </div>
          
        </div>
      
      </div>
    </>)
};

export default SloganCard

