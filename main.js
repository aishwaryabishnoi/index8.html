
+   var array = ['come','india','love','hate','war','stingy','arrogant','blind','peace','lotus'];
+    
+   
+   var playerscore = 0;
+	 var display2  = document.querySelector("#display");
+   var getscore = document.querySelector("#score");
+   var count = 4;
+   
+ 
+  
+  function countdown() {
+   this.count = this.count - 1;
+    
+    
+    counter = setInterval(countdown,1000);
+    display2.innerHTML = this.count;
+
+    if (this.count <= 0) {
+      clearInterval(this.counter);
+      play();
+    }
+    return;
+  }
+
+  function play()
+  {
+    var words = display2.innerHTML = (array[Math.floor((Math.random()*array.length))]).toLowerCase();
+    var answer = document.querySelector("#getinput").value; 
+        for (var i = 0; i < array.length; i++) 
+    {
+        if (answer === array[i]) 
+        {
+         playerscore++;
+         getscore.innerHTML = playerscore;
+        }
+       else
+       {
+        getscore.innerHTML = "Wrong";
+       }
+    }
+  }
