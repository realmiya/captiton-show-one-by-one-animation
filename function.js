    function addPanelCaption(){

        $(".panelCaption_l1").text("");
        $(".panelCaption_l2").text("");

        const words1 = 'Welcome.';
        const words2 = 'Make yourself at home.';
      
        const wordflick = function (classname, words) {
          let offset = 0;
          const intervalSpeed = 70;
          setInterval(function () {
            if(offset<=words.length){
            $(classname).append(words.charAt(offset));
              offset++;
          }
        },intervalSpeed)
        };

        wordflick('.panelCaption_l1',words1);
        setTimeout(()=>wordflick('.panelCaption_l2',words2),800);
      

    }
