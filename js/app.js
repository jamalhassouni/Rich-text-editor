 var showingSourceCode = false;
 var isInEditMode = true;
 var bodyTag = richTextField.document.getElementsByTagName('body')[0];

 function enableEditMode() {
     richTextField.document.designMode = 'On';
 }

 function execCmd(command) {
     richTextField.document.execCommand(command, false, null);
 }

 function execCommandWithArg(command, arg) {
     richTextField.document.execCommand(command, false, arg);
 }

 function toggleSource() {
     if (showingSourceCode) {
         bodyTag.innerHTML = bodyTag.textContent;
         showingSourceCode = false;
     } else {
         bodyTag.textContent = bodyTag.innerHTML;
         showingSourceCode = true;
     }
 }

 function toggleEdit() {
     if (isInEditMode) {
         richTextField.document.designMode = 'Off';
         isInEditMode = false;
     } else {
         richTextField.document.designMode = 'On';
         isInEditMode = true;
     }
 }