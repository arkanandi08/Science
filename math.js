    function cl() {
      document.getElementById("trig").style.display = "none";
      document.getElementById("blur").style.display = "none";
      document.getElementById("area").style.display = "none";
      document.getElementById("perimeter").style.display = "none";
    }
    function trigop() {
      document.getElementById("trig").style.display = "block";
      document.getElementById("blur").style.display = "block";
    }
    function trig() {
      const d = document.getElementById("sin");
      const s = f1.s.value;
      const rad = s * (Math.PI / 180);
      const sinv = Math.sin(rad);
      d.innerText = sinv;

      const d2 = document.getElementById("cos");
      const c = document.forms["f1"].elements["c"].value;
      const radc = c * (Math.PI / 180);
      const cv = Math.cos(radc);
      d2.innerText = cv;

      const d3 = document.getElementById("tan");
      const t = document.forms["f1"].elements["t"].value;
      const radt = t * (Math.PI / 180);
      var tv = Math.tan(radt);
      if (t == 90) {
        var tv = 1 / 0;
      }
      d3.innerText = tv;
    }
    function trig2() {
      const d = document.getElementById("cosec");
      const cs = document.forms["f1"].elements["cs"].value;
      const rad = cs * (Math.PI / 180);
      const csecv = 1 / Math.sin(rad);
      d.innerText = csecv;

      const d2 = document.getElementById("sec");
      const s = document.forms["f1"].elements["sc"].value;
      const radc = s * (Math.PI / 180);
      const sv = 1 / Math.cos(radc);
      d2.innerText = sv;

      const d3 = document.getElementById("cot");
      const c = document.forms["f1"].elements["ct"].value;
      const radt = c * (Math.PI / 180);
      var cv = 1 / Math.tan(radt);
      if (c == 90) {
        var cv = 0;
      }
      d3.innerText = cv;
    }
    function inv() {
      document.getElementById("sct").style.display = "none";
      document.getElementById("csc").style.display = "block";
    }
    function inv2() {
      document.getElementById("csc").style.display = "none";
      document.getElementById("sct").style.display = "block";
    }
    function clr() {
      document.getElementById("sin").innerText = "";
      document.getElementById("sec").innerText = "";
      document.getElementById("cos").innerText = "";
      document.getElementById("tan").innerText = "";
      document.getElementById("sec").innerText = "";
      document.getElementById("cosec").innerText = "";
      document.getElementById("cot").innerText = "";
      document.getElementById("areatrig").innerText = "";
      document.getElementById("arearect").innerText = "";
      document.getElementById("areapent").innerText = "";
      document.getElementById("areahex").innerText = "";
      document.getElementById("areahep").innerText = "";
      document.getElementById("peritrig").innerText = "";
      document.getElementById("perirect").innerText = "";
      document.getElementById("peripent").innerText = "";
      document.getElementById("perihex").innerText = "";
      document.getElementById("perihep").innerText = "";
      }
    function areaop() {
      document.getElementById("area").style.display = "block";
      document.getElementById("blur").style.display = "block";
    }
    function areacal() {
      var h, b, a;
      h = f2.t1.value;
      b = f2.t2.value;
      a = 1 / 2 * b * h;
      document.getElementById("areatrig").innerText = a + "(unit)²";
      var le, bre, ar;
      le = f2.r1.value;
      bre = f2.r2.value;
      ar = le * bre;
      document.getElementById("arearect").innerText = ar + "(unit)²";
      var ps = f2.p1.value;
      var ap = 1.7205 * ps * ps;
      document.getElementById("areapent").innerText = ap + "(unit)²"
      var hs = f2.he1.value;
      var ah = 2.59808 * hs * hs;
      document.getElementById("areahex").innerText = ah + "(unit)²"
      var hps = f2.hep1.value;
      var ahp = 3.63391 * hps * hps;
      document.getElementById("areahep").innerText = ahp + "(unit)²"    }
    function anext() {
      document.getElementById("first").style.display = "none";
      document.getElementById("rectangle").style.display = "block";
    }
    function aprev() {
      document.getElementById("first").style.display = "block";
      document.getElementById("rectangle").style.display = "none";
    }
    function bnext() {
      document.getElementById("rectangle").style.display = "none";
      document.getElementById("pent").style.display = "block";
    }
    function bprev() {
      document.getElementById("rectangle").style.display = "block";
      document.getElementById("pent").style.display = "none";
    }
    function cnext() {
      document.getElementById("pent").style.display = "none";
      document.getElementById("hex").style.display = "block";
    }
    function cprev() {
      document.getElementById("pent").style.display = "block";
      document.getElementById("hex").style.display = "none";
      }
    function dnext() {
      document.getElementById("hex").style.display = "none";
      document.getElementById("hep").style.display = "block";
    }
    function dprev() {
      document.getElementById("hex").style.display = "block";
      document.getElementById("hep").style.display = "none";
      }
    function perimeter() {
      document.getElementById("perimeter").style.display = "block";
      document.getElementById("blur").style.display = "block";
    }
    function perical() {
      var h, b, s, a;
      h = parseInt(f3.t1.value);
      b = parseInt(f3.t2.value);
      s = parseInt(f3.t3.value);
      a = h+b+s;
      document.getElementById("peritrig").innerText = a + "unit";
      var le, bre, ar;
      le = parseInt(f3.r1.value);
      bre = parseInt(f3.r2.value);
      ar = le + bre;
      document.getElementById("perirect").innerText = ar + "unit";
      var ps = parseInt(f3.p1.value);
      var ap = 5*ps;
      document.getElementById("peripent").innerText = ap + "unit"
      var hs = parseInt(f3.he1.value);
      var ah = 6 * hs;
      document.getElementById("perihex").innerText = ah + "unit"
      var hps = parseInt(f3.hep1.value);
      var ahp = 7 * hps;
      document.getElementById("perihep").innerText = ahp + "unit"
    }
        function panext() {
      document.getElementById("pfirst").style.display = "none";
      document.getElementById("prectangle").style.display = "block";
    }
    function paprev() {
      document.getElementById("pfirst").style.display = "block";
      document.getElementById("prectangle").style.display = "none";
    }
    function pbnext() {
      document.getElementById("prectangle").style.display = "none";
      document.getElementById("ppent").style.display = "block";
    }
    function pbprev() {
      document.getElementById("prectangle").style.display = "block";
      document.getElementById("ppent").style.display = "none";
    }
    function pcnext() {
      document.getElementById("ppent").style.display = "none";
      document.getElementById("phex").style.display = "block";
    }
    function pcprev() {
      document.getElementById("ppent").style.display = "block";
      document.getElementById("phex").style.display = "none";
      }
    function pdnext() {
      document.getElementById("phex").style.display = "none";
      document.getElementById("phep").style.display = "block";
    }
    function pdprev() {
      document.getElementById("phex").style.display = "block";
      document.getElementById("phep").style.display = "none";
      }
      function calculator(){
        window.location.href="calculator.html";
      }