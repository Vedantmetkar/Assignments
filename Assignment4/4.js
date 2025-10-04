
    const textContainer = document.getElementById('text-container');
    const colorBox = document.getElementById('colorbox');
    const colorChangeButton = document.getElementById('colorchange');
    const fontSizeSlider = document.getElementById('fontsize');
    const underlineButton = document.getElementById('underline');
    const italicButton = document.getElementById('italic');
    const boldButton = document.getElementById('bold');
    const fontList = document.getElementById('list');
    const getStyleButton = document.getElementById('getstyle');
    const cssPropsParagraph = document.getElementById('css-props');

   
    textContainer.style.fontSize = `${fontSizeSlider.value}px`;

    textContainer.style.fontFamily = 'sans-serif';

    
    colorChangeButton.addEventListener('click', () => {
        const colorValue = colorBox.value.trim();
      
        if (colorValue) {
            textContainer.style.color = colorValue;
        } else {
           
            alert('Please enter a color value.');
        }
    });


    
    fontSizeSlider.addEventListener('input', () => {
        
        
        textContainer.style.fontSize = `${fontSizeSlider.value}px`;
    });


    const toggleStyle = (element, property, onValue, offValue) => {
        
        if (element.style[property] === onValue) {
            element.style[property] = offValue; 
        } else {
            element.style[property] = onValue;
        }
    };

    underlineButton.addEventListener('click', () => {
        toggleStyle(textContainer, 'textDecoration', 'underline', 'none');
    });

    italicButton.addEventListener('click', () => {
        toggleStyle(textContainer, 'fontStyle', 'italic', 'normal');
    });

    boldButton.addEventListener('click', () => {
        
        toggleStyle(textContainer, 'fontWeight', 'bold', 'normal');
    });


   
    fontList.addEventListener('change', () => {
        
        textContainer.style.fontFamily = fontList.value;
    });

    
    getStyleButton.addEventListener('click', () => {
        
        const computedStyle = window.getComputedStyle(textContainer);
       
        const inlineStyle = textContainer.style;

        const properties = [];

        
        const color = inlineStyle.color || 'initial';
        if (color !== 'initial') {
             
            
             const displayColor = colorBox.value.trim() || computedStyle.color;
             properties.push(`color: ${displayColor}`);
        }

        
        properties.push(`font-size: ${inlineStyle.fontSize || computedStyle.fontSize}`);

       
        properties.push(`font-family: ${inlineStyle.fontFamily || computedStyle.fontFamily}`);

         
        
        const decoration = inlineStyle.textDecoration.includes('underline') ? 'underline' : 'none';
        if (decoration !== 'none') {
            properties.push(`text-decoration: ${decoration}`);
        }


        
        const fontStyle = inlineStyle.fontStyle || computedStyle.fontStyle;
        if (fontStyle !== 'normal') {
            properties.push(`font-style: ${fontStyle}`);
        }

        
        const fontWeight = inlineStyle.fontWeight || computedStyle.fontWeight;
       
        if (fontWeight === 'bold' || parseInt(fontWeight) >= 700) {
            properties.push(`font-weight: ${fontWeight}`);
        }


        
        const cssString = properties.filter(prop => !prop.endsWith(': initial') && !prop.endsWith(': ') && !prop.endsWith(': none') && !prop.endsWith(': normal'))
                                  .join('; ');
        
        
        cssPropsParagraph.textContent = cssString ? `{ ${cssString}; }` : '{ /* No styles set */ }';
    });