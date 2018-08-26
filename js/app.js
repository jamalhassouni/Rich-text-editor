 let showingSourceCode = false;
 let isInEditMode = true;
 let bodyTag = richTextField.document.getElementsByTagName('body')[0];

 let  enableEditMode = ()  => {
     richTextField.document.designMode = 'On';
 }

 let  execCmd = (command) =>  {
     richTextField.document.execCommand(command, false, null);
 }

 let execCommandWithArg = (command,arg) =>  {
     richTextField.document.execCommand(command, false, arg);
 }

 let toggleSource = () =>  {
     if (showingSourceCode) {
         bodyTag.innerHTML = bodyTag.textContent;
         showingSourceCode = false;
     } else {
         bodyTag.textContent = bodyTag.innerHTML;
         showingSourceCode = true;
     }
 }

let  toggleEdit = () => {
     if (isInEditMode) {
         richTextField.document.designMode = 'Off';
         isInEditMode = false;
     } else {
         richTextField.document.designMode = 'On';
         isInEditMode = true;
     }
 }