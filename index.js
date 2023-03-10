function submitFunction() {
  maxArrayLength = 100

  inputArea = document.querySelector("input");
  let inputData = inputArea.value.trim();
  // reset inputArea after obtaining the data
  inputArea.value = '';

  if (inputData) {

    if (localStorage.inputCollection) {
      let inputCollection = JSON.parse(localStorage.inputCollection);
      inputCollection.push(inputData);
      
      // delete random index if length exceeds maxArrayLength
      if (inputCollection.length > maxArrayLength) {
        const randomIndex = Math.floor(Math.random() * (maxArrayLength+1));
        inputCollection.splice(randomIndex, 1);
      };

      localStorage.setItem('inputCollection', JSON.stringify(inputCollection));
    } else {
      let inputCollection = [inputData];
      localStorage.setItem('inputCollection', JSON.stringify(inputCollection));
    };
  } else {
    window.alert("Please input a valid string.");
  };
};

function randomiseMeme() {
  if (document.getElementById("textCheckbox").checked) {
    try {
      const inputCollection = JSON.parse(localStorage.inputCollection);
      let randomIndex = Math.floor(Math.random() * inputCollection.length);

      document.getElementById("randomTextArea").textContent = inputCollection[randomIndex];
    } catch (error) {
      //if there are no strings in collection than we continue displaying without text
      document.getElementById("textCheckbox").checked = false;

      window.alert("Please input a text into database first.");
    }
  } else {
    document.getElementById("randomTextArea").textContent = ''
  };


  const textArea = document.getElementById("randomTextArea");

  if (document.getElementById("fontCheckbox").checked) {
    randomFontFamilies = ["Copperplate, fantasy", "Lucida Handwriting, cursive", "Courier New, monospace", "Georgia, serif"];
    randomIndex = Math.floor(Math.random() * randomFontFamilies.length);
    textArea.style.fontFamily = randomFontFamilies[randomIndex];

    randomFontStyles = ["normal", "italic", "oblique"];
    randomIndex = Math.floor(Math.random() * randomFontStyles.length);
    textArea.style.fontStyle = randomFontStyles[randomIndex];

    textArea.style.fontWeight = Math.floor(Math.random() * 1000) +1;

    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    textArea.style.color = "rgb(" + x + "," + y + "," + z + ")";
  } else {
    // change font back to default settings
    textArea.style.fontFamily = "Verdana";
    textArea.style.fontStyle = "normal";
    textArea.style.fontWeight = "normal";
    textArea.style.color = "#8097A6";
  };


  image = document.querySelector("img");

  if (document.getElementById("imageCheckbox").checked) {
    randomImages = ["https://as2.ftcdn.net/v2/jpg/05/19/06/55/1000_F_519065560_pqAHjtCjUa9OFLyfjJgWRdmGy2DH1R49.jpg", "https://as1.ftcdn.net/v2/jpg/05/05/01/08/1000_F_505010875_UDhpZpQ0RACreTuwhEFLxhdg9QmmvMAT.jpg", "https://as1.ftcdn.net/v2/jpg/05/07/02/10/1000_F_507021008_Ztaxny82f0owt1P5oHIZJzXetcOSzzct.jpg", "https://as2.ftcdn.net/v2/jpg/05/06/06/41/1000_F_506064153_KDZTxBgxPS4VX0dHuQcu89ro7fvDsegh.jpg", "https://as1.ftcdn.net/v2/jpg/05/02/57/48/1000_F_502574827_Ng66KmuUe5me7kxxZ378dbFzrDF5y50s.jpg",
                    "https://as1.ftcdn.net/v2/jpg/05/03/95/06/1000_F_503950606_Yx1wchxhTCcWZwTv3yk8cBi3WW9kBW0o.jpg", "https://as1.ftcdn.net/v2/jpg/05/06/82/24/1000_F_506822421_Kkz84ERNCeO5zpYy2AAIXtEcTvx7RTGz.jpg", "https://as2.ftcdn.net/v2/jpg/05/11/51/75/1000_F_511517594_vhQTnLYISQ9fZUtfW3W7eV7Ru3caEyJ6.jpg", "https://as1.ftcdn.net/v2/jpg/05/11/98/46/1000_F_511984672_LvsS1IZiObwU93GbctS7uECcTuZ9ARws.jpg", "https://as1.ftcdn.net/v2/jpg/05/15/14/60/1000_F_515146016_wgyK85j5OFPKpG1XNGeDFPjX4W3G7kWa.jpg",
                    "https://as2.ftcdn.net/v2/jpg/05/17/51/71/1000_F_517517177_CxsP1ERunQVuaJpHUJdFtb8JrH0y3QsT.jpg", "https://as2.ftcdn.net/v2/jpg/05/19/17/93/1000_F_519179393_w7QopOlIU4vNWHaek8dSexb5xPj9Yz6H.jpg", "https://as2.ftcdn.net/v2/jpg/05/18/09/97/1000_F_518099752_zWs0GqLa1SaBOHnyefoOTbdHwwRzsmv1.jpg", "https://as1.ftcdn.net/v2/jpg/04/52/92/96/1000_F_452929644_MNMW5ztTEVe3NxAz5UQMHc5VtkuMK1yf.jpg", "https://as2.ftcdn.net/v2/jpg/04/64/50/89/1000_F_464508930_amAWbDUWFcoT5Nsyy2wzJ13KE6V8HmMi.jpg",
                    "https://as2.ftcdn.net/v2/jpg/05/50/45/69/1000_F_550456995_rBJMm502E5eEdSBHCcShXOJxQFvjJuey.webp", "https://as2.ftcdn.net/v2/jpg/05/19/73/95/1000_F_519739517_pGbDA9EqS1RRQBEDBniWg3tjDcZpNEM4.jpg", "https://as1.ftcdn.net/v2/jpg/05/37/27/88/1000_F_537278876_OHmSOE081XsIKbIJi4UobgiVpuj3xlRX.jpg", "https://as1.ftcdn.net/v2/jpg/05/00/11/10/1000_F_500111004_ILAc82JKQ9AES9orCRCdCJQRDgBmtX5J.jpg", "https://as1.ftcdn.net/v2/jpg/05/15/94/54/1000_F_515945462_uoijqmei4RbcZqymUUT089czTIPe6VAc.jpg",
                    "https://as1.ftcdn.net/v2/jpg/04/23/52/44/1000_F_423524459_G7tat2iELRNCHCqeCtZFPtS4iSxnvlb2.jpg", "https://as2.ftcdn.net/v2/jpg/05/16/58/41/1000_F_516584125_NAHpjzMTfiMwanFkRJjJPcD6fp5yQfvF.jpg", "https://as1.ftcdn.net/v2/jpg/05/11/58/98/1000_F_511589847_7PX2q6edAVHDh9X2Vpe14O3QbR3hXP58.jpg", "https://as2.ftcdn.net/v2/jpg/05/11/86/25/1000_F_511862596_lNIqVv5sVH70YTmMwjceKEPfr6ZxgC3p.jpg", "https://as1.ftcdn.net/v2/jpg/04/39/84/66/1000_F_439846655_PUdXae5ia1Lmtm3X8qcIooBLW1qespj8.jpg",
                    "https://as2.ftcdn.net/v2/jpg/05/11/74/55/1000_F_511745586_duAcMqKB0kddTgjDC1VltoyCq5rmysE8.jpg", "https://as2.ftcdn.net/v2/jpg/05/14/39/93/1000_F_514399331_zAZwPxTw8WlvHLkhCt2HniQjcoWrixj1.jpg", "https://as1.ftcdn.net/v2/jpg/04/38/18/72/1000_F_438187211_Ad1cA6nVIh9uPHDLPPPgViyb8YojS3kS.jpg", "https://as2.ftcdn.net/v2/jpg/05/30/59/03/1000_F_530590385_iAdEWzSs6VZuJnRfdty1Nr6G1ahj9QL1.jpg", "https://as2.ftcdn.net/v2/jpg/05/16/75/25/1000_F_516752550_FlBtpF0m2ZPxZ6n9ekd8KWgPOYH9rZ6s.jpg",
                    "https://as1.ftcdn.net/v2/jpg/05/03/00/34/1000_F_503003473_PCIJ0LSzdxfO8ey8oJi7TdN3QPkKd9W4.jpg", "https://as1.ftcdn.net/v2/jpg/05/05/19/72/1000_F_505197283_LcUhbXlPdjL6nzSeVSXs2T0kgEbpiTvW.jpg", "https://as2.ftcdn.net/v2/jpg/05/05/19/21/1000_F_505192133_WJg3aInJYFxftbOWOHOnDu6jgamYV2Ez.jpg", "https://as2.ftcdn.net/v2/jpg/05/19/32/87/1000_F_519328717_LjiP1CCivCw2Qy1DsRmDnzSLN4wFOArY.jpg", "https://as1.ftcdn.net/v2/jpg/05/05/42/80/1000_F_505428090_yTIQDHioENRvJW4VN39ssAHtdn47LMU5.jpg",
                    "https://as2.ftcdn.net/v2/jpg/05/05/89/45/1000_F_505894585_S7BYkh1UOOgAaRzsLoaPqCl333AUT4K1.jpg", "https://as2.ftcdn.net/v2/jpg/05/31/21/89/1000_F_531218994_FffvnH7IlQfNZb54p65icU8viSnVtqNJ.jpg", "https://as1.ftcdn.net/v2/jpg/05/06/64/08/1000_F_506640882_YA3kc4aBR1uCz5Kyc2LrcMzCvVcuBGhr.jpg", "https://as1.ftcdn.net/v2/jpg/05/10/62/34/1000_F_510623499_Bt9y8fhtbHhIJIlaJ10T0IGqxhtQ0bK1.jpg", "https://as2.ftcdn.net/v2/jpg/05/05/95/63/1000_F_505956341_NP2efRdvdYkfUNx97wV6OERSrGVIbTvN.jpg",
                    "https://as1.ftcdn.net/v2/jpg/05/06/82/16/1000_F_506821652_KWsYUBS4Q345FmPMWFgyuxbHpr8akuE2.jpg", "https://as2.ftcdn.net/v2/jpg/04/99/04/05/1000_F_499040584_CG8nLieE2nsEB7tSYpqDS0CfGAzTce6k.jpg", "https://as2.ftcdn.net/v2/jpg/05/07/29/63/1000_F_507296392_y6B5BYGs4bgh3M0t73cDnJ34g0ckKd6q.jpg", "https://as1.ftcdn.net/v2/jpg/05/05/01/08/1000_F_505010882_uZeSG7vTnH5BaF9UcE38WE8zfm10glrs.jpg", "https://as2.ftcdn.net/v2/jpg/05/05/55/39/1000_F_505553947_V3tCD4yX1kXvM814opW9sOjEHhjvOtUi.jpg",
                    "https://as1.ftcdn.net/v2/jpg/01/18/08/46/1000_F_118084655_hFtjemobDtkaHXQfgkijKSs7bMEKeFPC.jpg", "https://as1.ftcdn.net/v2/jpg/05/06/96/58/1000_F_506965862_Htd9DmQX8a8ejajlR0Twpu8TZYZXY8Ro.jpg", "https://as1.ftcdn.net/v2/jpg/05/08/21/78/1000_F_508217853_n07dODFrhsYr0JwfojxWESe2V0BBfN67.jpg", "https://as2.ftcdn.net/v2/jpg/05/49/71/91/1000_F_549719190_MFFoT21DsWa4nED1hBNcDlSGdO1c3Ubq.jpg", "https://as2.ftcdn.net/v2/jpg/04/41/97/95/1000_F_441979577_m56U1hF4Ztqa9B4JSneecnFrkEh45wNl.jpg",
                    "https://as2.ftcdn.net/v2/jpg/05/07/63/65/1000_F_507636512_Sc087bklXTjqY6WhUZwNdtXItG3z5J4w.jpg", "https://as2.ftcdn.net/v2/jpg/05/28/63/73/1000_F_528637393_spvbL4ovWQ6EDvtk23TNQRvX4SyYkTJK.jpg", "https://as2.ftcdn.net/v2/jpg/04/29/79/17/1000_F_429791782_youHFrlVtCyFaqGljQT2I3VGMIOt30Mr.jpg", "https://as2.ftcdn.net/v2/jpg/05/12/20/21/1000_F_512202122_Hqm2chAaH9kZlmtu5podnrSjwk00lbQX.jpg", "https://as2.ftcdn.net/v2/jpg/05/53/42/45/1000_F_553424543_a6oUpYJBJ0rFcaHIEbSI3yZ6HJU52x1r.jpg",
                    "https://as2.ftcdn.net/v2/jpg/05/54/39/83/1000_F_554398317_urclXtF98e8cOYi0nUqyQMbMpZ9ZYxlR.webp", "https://as2.ftcdn.net/v2/jpg/05/52/52/85/1000_F_552528583_W6rMUHWHg4fQITaKdoBYPsNHozDRXSYS.jpg", "https://as1.ftcdn.net/v2/jpg/05/53/43/82/1000_F_553438282_n1PBPDQYYMRJ0aUPTGVq155sCbZKcmF6.jpg", "https://as1.ftcdn.net/v2/jpg/05/51/76/16/1000_F_551761638_yXy5hMmAcvfWTzxnAjx0egPdmRJ4TiQe.jpg", "https://as2.ftcdn.net/v2/jpg/05/54/85/15/1000_F_554851530_RT4SqdqdBnTfT7asmJcpMFyLQVdDb70o.jpg",
                    "https://as2.ftcdn.net/v2/jpg/05/53/14/27/1000_F_553142772_GrMWXrYVGODGI6yxwnIGDF94q4sdf9lI.jpg", "https://as2.ftcdn.net/v2/jpg/05/53/41/89/1000_F_553418987_Z8yrGzKIHN7Z9bYYLV9zXuBDLH3zLrMC.jpg", "https://as1.ftcdn.net/v2/jpg/05/54/75/54/1000_F_554755451_kzfAlfaGysfwQbrsycGFNVHgB6I7LWWM.jpg", "https://as2.ftcdn.net/v2/jpg/05/51/90/49/1000_F_551904915_P8FckDk7KHBqd7m41P54pG1PctmmOShY.jpg", "https://as1.ftcdn.net/v2/jpg/05/53/06/62/1000_F_553066284_ndVoA9AQvAE0H2jVlPdP5AI1m9Q7IxdV.jpg",
                    "https://as1.ftcdn.net/v2/jpg/05/53/93/10/1000_F_553931053_zrkoA2pOxr2xuDIjpzuddpuPtiaiFKzE.jpg", "https://as2.ftcdn.net/v2/jpg/05/53/78/13/1000_F_553781322_YGyxRgZOEuic5TPE7TZ5fK0e5XkGpDkh.webp", "https://as2.ftcdn.net/v2/jpg/05/54/01/11/1000_F_554011166_a3IARrdaQ7qpnxai8hO6jv1bE92nEBxQ.jpg", "https://as2.ftcdn.net/v2/jpg/05/53/18/47/1000_F_553184756_mC4mYysH5ILo2iMdWCswZZWijt91Cm29.webp", "https://as2.ftcdn.net/v2/jpg/05/53/99/95/1000_F_553999521_AXrbsYXd7uKi57nE0YvkxQhg5C4I1Bnc.jpg",
                    "https://media4.giphy.com/media/K5mhAi01uxnos/giphy.gif?cid=790b761145ddd1069e90200c73a180f030d61a265e3590ff&rid=giphy.gif&ct=g", "https://media1.giphy.com/media/8PpFJcG4y8HqsxQumz/giphy.gif?cid=790b76112277cae032b55c71c2e0e1679390c70e9c5c18f5&rid=giphy.gif&ct=g", "https://media1.giphy.com/media/umB78RdWPps5Hw4TkB/200w.webp", "https://media1.giphy.com/media/yNdKp1uG6PEDyy2DHM/200w.webp", "https://media4.giphy.com/media/ykJ2tWiguTXrQm9h9k/200w.webp",
                    "https://media2.giphy.com/media/rx6vqTivszAnELfPPq/200w.webp", "https://media2.giphy.com/media/vocYiweLGhga0BUWOx/200w.webp", "https://media3.giphy.com/media/GtzLN494fssYgQm0Pr/200w.webp", "https://media4.giphy.com/media/xVuFTYAT17Nen58izK/200.webp", "https://media3.giphy.com/media/iQcKyppHz9YuCv4EhT/200w.webp",
                    "https://media0.giphy.com/media/PAuDiTd7DLwYagLGH3/200.webp", "https://media0.giphy.com/media/1xke34eG7X8ZEyZsRW/giphy.webp?cid=ecf05e476b6i2a7320eeopm249fgld5w3zj9kg4zxpefkcna&rid=giphy.webp&ct=g", "https://media2.giphy.com/media/S596QMGlpU29q/giphy.gif", "https://media4.giphy.com/media/9XWiGiK7iK9A5CXx1g/giphy.gif", "https://media4.giphy.com/media/PQ0VI3S5vqL5pwQQJX/giphy.gif",
                    "https://media1.giphy.com/media/dUQL2bKltOU7cO9Maw/giphy.gif", "https://media2.giphy.com/media/3ov9jFWvQImibkr1uM/giphy.gif", "https://media2.giphy.com/media/l378lTvlx7OWemXtu/giphy.gif", "https://media1.giphy.com/media/mBiGHxPlfYa8mfqa21/giphy.gif", "https://media0.giphy.com/media/28xdRHsAQf7kcLmxDq/200w.webp?cid=ecf05e470k33nmzjqdywg33agdncis9oyin4bcm9128hrwh8&rid=200w.webp&ct=s",
                    "https://media0.giphy.com/media/TO4xljrIE9tftppRgD/200w.webp?cid=ecf05e470k33nmzjqdywg33agdncis9oyin4bcm9128hrwh8&rid=200w.webp&ct=s", "https://media4.giphy.com/media/l378tbMVnOycjrfa0/200w.webp", "https://media2.giphy.com/media/3ov9k0Ziq50EoOuWRi/200w.webp", "https://cdn.pixabay.com/animation/2022/09/22/17/17/17-17-55-215_512.gif", "https://cdn.pixabay.com/animation/2022/08/06/13/17/13-17-20-260_512.gif",
                    "https://cdn.pixabay.com/animation/2022/07/29/08/05/08-05-11-359_512.gif", "https://cdn.pixabay.com/animation/2022/11/12/17/39/17-39-10-721_512.gif", "https://cdn.pixabay.com/animation/2022/12/01/17/03/17-03-11-60_512.gif", "https://cdn.pixabay.com/animation/2022/12/11/04/11/04-11-18-929_512.gif", "https://cdn.pixabay.com/animation/2022/12/05/15/23/15-23-06-837_512.gif"];

    //in case image icon was hidden before
    image.style.display = "initial";
    
    randomIndex = Math.floor(Math.random() * randomImages.length);
    image.src = randomImages[randomIndex];
  } else {
    // hide image by trigering custom onerror with invalid URL
    image.src = " ";
  };
};
