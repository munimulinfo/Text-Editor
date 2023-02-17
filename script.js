// text bold
document.getElementById('bold_btn').addEventListener('click',(e)=>{
    const text = document.getElementById('edit_text_area');

    if(text.style.fontWeight === "bold"){
        text.style.fontWeight = "normal";
    }else{
        text.style.fontWeight = "bold";
    }
});

// text italic
document.getElementById('italic_btn').addEventListener('click',(e)=>{
    const text = document.getElementById('edit_text_area');

    if(text.style.fontStyle === "italic"){
        text.style.fontStyle = "normal";
    }else{
        text.style.fontStyle = "italic";
    }
});

// text underline
document.getElementById('underline_btn').addEventListener('click',(e)=>{
    const text = document.getElementById('edit_text_area');

    if(text.style.textDecoration === "underline"){
        text.style.textDecoration = "none";
    }else{
        text.style.textDecoration = "underline";
    }
});

// text align center
document.getElementById('center_btn').addEventListener('click',(e)=>{
    const text = document.getElementById('edit_text_area');

    text.style.textAlign = "center";

});

// text align left
document.getElementById('left_btn').addEventListener('click',(e)=>{
    const text = document.getElementById('edit_text_area');
    text.style.textAlign = "left";
});

// text align right
document.getElementById('right_btn').addEventListener('click',(e)=>{
    const text = document.getElementById('edit_text_area');
    text.style.textAlign = "right";
});

// text align justify
document.getElementById('justify_btn').addEventListener('click',(e)=>{
    const text = document.getElementById('edit_text_area');
    text.style.textAlign = "justify";
});


// font re-sizing
document.getElementById('font_size').addEventListener('change',(e)=>{
    if(e.target.value < 14){
        e.target.value = 14;
    }

    const text = document.getElementById('edit_text_area');
    text.style.fontSize = `${e.target.value}px`;

});



// text color change by color input filed
document.getElementById('color_code').addEventListener('change',(e)=>{
    const text = document.getElementById('edit_text_area');
    text.style.color = e.target.value;

});


// to uppercase
document.getElementById('capital_btn').addEventListener('click',(e)=>{  
    const textElement = document.getElementById('edit_text_area');
    const text = textElement.value;
    const updatedText = text.toUpperCase();
    console.log(updatedText);
    textElement.value = updatedText;

});

// to lowercase
document.getElementById('small_btn').addEventListener('click',(e)=>{  
    const textElement = document.getElementById('edit_text_area');
    const text = textElement.value;
    const updatedText = text.toLowerCase();
    textElement.value = updatedText;

});

// text capitalized the first letter of each sentence
document.getElementById('capital_first_btn').addEventListener('click',(e)=>{
    const textElement = document.getElementById('edit_text_area');
    const text = textElement.value;
    const newText = text.split('.');
    let newTextArr= [];
    newText.forEach((value)=>{
        newTextArr.push(value.trim().charAt(0).toUpperCase() + value.trim().slice(1));
    })
    const updatedText= newTextArr.join('. ');
    textElement.value = updatedText;
});