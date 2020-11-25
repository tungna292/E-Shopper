///Account-------------------------------------------------------------------
var account = JSON.parse(localStorage.getItem("account"));
if (account === null) {
  account = [];
  var account = [
    {
      id: 0,
      username: "admin",
      password: "123456",
      level: 1,
    },
    {
      id: 1,
      username: "b",
      password: "b",
      level: 0,
    },
    {
      id: 2,
      username: "a",
      password: "a",
      level: 0,
    },
  ];
  localStorage.setItem("account", JSON.stringify(account));
}

//in ra index
function listProduct() {
  var product = JSON.parse(localStorage.getItem("product"));
  if (product === null) {
    product = [
      {
        id: 0,
        name: "Easy Polo Black Edition",
        price: "90000",
        note: "Male",
        image: "images/home/gallery1.jpg",
      },
      {
        id: 1,
        name: "Easy Polo Black",
        price: "50000",
        note: "Female",
        image: "images/home/gallery2.jpg",
      },
      {
        id: 2,
        name: "Easy Polo ",
        price: "130000",
        note: "Male",
        image: "images/home/gallery3.jpg",
      },
      {
        id: 3,
        name: "Easy Polo ",
        price: "130000",
        note: "Male",
        image: "images/home/gallery3.jpg",
      },
      {
        id: 4,
        name: "Easy Polo ",
        price: "130000",
        note: "Male",
        image: "images/home/gallery3.jpg",
      },
      {
        id: 5,
        name: "Easy Polo ",
        price: "130000",
        note: "Male",
        image: "images/home/gallery3.jpg",
      },
      {
        id: 6,
        name: "Easy Polo ",
        price: "130000",
        note: "Male",
        image: "images/home/gallery3.jpg",
      },
      {
        id: 7,
        name: "Easy Polo ",
        price: "130000",
        note: "Male",
        image: "images/home/gallery3.jpg",
      },
    ];
    localStorage.setItem("product", JSON.stringify(product));
    printOnScreen();
  } else {
    printOnScreen();
  }
  /////////////////////////////
  function printOnScreen() {
    document.getElementById("prinf_product").innerHTML = "";
    for (let i = 0; i < product.length; i++) {
      var prinf =
        `<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4" style="margin: 10px;">
        <div class="produre_box bg-white shadow-sm">
        <div class="image_box">
            <img src="` +
        product[i].image +
        `" width="100%" height="100%" style="">
        </div>
        <div class="info_box p-3 bg-white">
            <p class="float-left font-weight-bold mb-0" style="font-size: 115%">` +
        product[i].name +
        `</p><p class="float-right font-weight-bold mb-2" style="font-size: 115%">` +
        product[i].price +
        `đ</p>
            <div style="clear: both;"></div>

            <p style="font-size: 85%;height:35px;">` +
        product[i].note +
        `</p>
            <div class="order_box float-right">
                <div onclick="checkorder(` +
        product[i].id +
        `)" class="order_button float-right pt-2">
                    <a class="btn btn-info btn-add-to-cart" style="text-align:center;">
                        <i class="fas fa-shopping-cart" aria-hidden="true"> Add to card</i>
                    </a>

                </div>
            </div>
            <div style="clear: both;"></div>
        </div>
    </div>
</div>`;
      document.getElementById("prinf_product").innerHTML += prinf;
    }
  }
}

//--------------------------------------
function onloadAll() {
  listProduct();
}

var idup = JSON.parse(localStorage.getItem("idup"));
if (idup === null) {
  idup = [];
  var idup = 3;
  localStorage.setItem("idup", JSON.stringify(idup));
}

///////////////////////////////////////////////////////////////////////////////////////////////

var checkLogin = -1;
localStorage.setItem("checkLogin", JSON.stringify(checkLogin));

///////////////////////////////////////////////////////////////////////////////////////////////
function Signup() {
  var checkUsername = 0;
  var id = idup;
  var level = 0;
  var username = document.getElementById("usernameSignup").value;
  var password = document.getElementById("passwordSignup").value;
  var Repassword = document.getElementById("RepasswordSignup").value;
  if (
    username != "" &&
    password != "" &&
    Repassword != "" &&
    password == Repassword
  ) {
    for (let i = 0; i < account.length; i++) {
      if (account[i].username == username) {
        checkUsername = 1;
        break;
      }
    }
    if (checkUsername == 0) {
      accountSignup = {
        id,
        username,
        password,
        level,
      };
      account.push(accountSignup);

      localStorage.setItem("account", JSON.stringify(account));

      checkLogin = id;
      localStorage.setItem("checkLogin", JSON.stringify(checkLogin));

      var id = idup++;
      localStorage.setItem("idup", JSON.stringify(idup));
      console.log(account);
      document.getElementById("statusSignup").innerHTML = "Đăng ký thành công";
      alert("Đăng ký thành công");
    } else {
      document.getElementById("statusSignup").innerHTML =
        "Tên tài khoản đã tồn tại";
      alert("Tên tài khoản đã tồn tại");
    }
  } else {
    document.getElementById("statusSignup").innerHTML =
      "Vui lòng nhập đầy đủ thông tin";
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
function Login() {
  for (i = 0; i < account.length; i++) {
    if (
      document.getElementById("usernameLogin").value == account[i].username &&
      document.getElementById("passwordLogin").value == account[i].password
    ) {
      checkLogin = account[i].id;
      localStorage.setItem("checkLogin", JSON.stringify(checkLogin));

      if (account[i].level == 0) {
        document.getElementById("statusLogin").innerHTML =
          "Đăng nhập thành công thường";
        location.href = "indexUser.html";
      } else if (account[i].level == 1) {
        document.getElementById("statusLogin").innerHTML =
          "Đăng nhập thành công admin";
        location.href = "admin.html";
      }
    }
  }
  if (checkLogin == -1) {
    document.getElementById("statusLogin").innerHTML =
      "Sai mật khẩu hoặc tài khoản";
  }
}
