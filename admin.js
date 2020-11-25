// click thêm product
document.getElementById("addProduct").addEventListener("click", function () {
  document.getElementById("qlspham").style.display = "block";
  document.getElementById("qlspham_title").style.display = "block";
  document.getElementById("ttquan").style.display = "none";
  document.getElementById("watchAddNameInput").value = "";
  document.getElementById("watchAddNoteInput").value = "";
  document.getElementById("watchAddPriceInput").value = "";
  document.getElementById("watchAddImageInput").value = "";
  ManagementProduct();
});

//click quản ly sản phẩm
document.querySelector(".addProducts").addEventListener("click", function () {
  document.getElementById("qlspham").style.display = "block";
  document.getElementById("qlspham_title").style.display = "block";
  document.getElementById("ttquan").style.display = "none";
  document.getElementById("watchAddNameInput").value = "";
  document.getElementById("watchAddNoteInput").value = "";
  document.getElementById("watchAddPriceInput").value = "";
  document.getElementById("watchAddImageInput").value = "";
  document.getElementById("management_user_box").style.display = "none";
  ManagementProduct();
});

//click trang tổng quan
document
  .getElementById("dashboard_text")
  .addEventListener("click", function () {
    document.getElementById("qlspham").style.display = "none";
    document.getElementById("qlspham_title").style.display = "none";
    document.getElementById("ttquan").style.display = "block";
    document.getElementById("watchAddNameInput").value = "";
    document.getElementById("watchAddNoteInput").value = "";
    document.getElementById("watchAddPriceInput").value = "";
    document.getElementById("watchAddImageInput").value = "";
  });

//click quản lí user
document
  .getElementById("management_user")
  .addEventListener("click", function () {
    document.getElementById("ttquan").style.display = "none";
    document.getElementById("management_user_box").style.display = "block";
  });

//click button thêm user
document
  .getElementById("button_addUser")
  .addEventListener("click", function () {
    document.getElementById("addUser").style.display = "block";
    document.getElementById("addUser").style.display = "block";
    document.getElementById("updateUser").style.display = "none";
    document.getElementById("input_user").style.display = "block";
    document.getElementById("input_change_user").style.display = "none";
    document.getElementById("watchAddNameInput").value = "";
    document.getElementById("watchAddNoteInput").value = "";
    document.getElementById("watchAddPriceInput").value = "";
    document.getElementById("watchAddImageInput").value = "";
    ManagementUser();
  });

// //////////////////////////////////////////////////////////////////////////////////////
var idup = JSON.parse(localStorage.getItem("idup"));
var idupWatch = JSON.parse(localStorage.getItem("idupWatch"));
var product = JSON.parse(localStorage.getItem("product"));
var account = JSON.parse(localStorage.getItem("account"));
document.getElementById("amount").innerHTML = product.length;
//Quản lý sản phẩm --------------------------------------------------------
function ManagementProduct() {
  document.getElementById("prinfManagementProduct").innerHTML = "";
  var product = JSON.parse(localStorage.getItem("product"));
  for (let i = 0; i < product.length; i++) {
    var prinfManage =
      `<tr>
<td><div>
  <div class="cart_img_box float-left bg-warning" style="width: 30%;height: 80px;">
    <img src="` +
      product[i].image +
      `" width="100%" height="100%">
  </div>
  <div class="cart_info_box float-left pl-3" style="width: 70%;height: 80px;">
    <p class="mb-1 font-weight-bold" style="font-size: 115%;">` +
      product[i].name +
      `</p>
    <p style="font-size: 85%">` +
      product[i].note +
      `</p>
  </div>
</div> </td>

<td class="text-center"><p class="mt-2" style="padding:5px;">` +
      product[i].price +
      `</p> </td>
<td class="text-center">'<div class="btn btn-danger text-white ml-2" onclick="DeleteProduct(` +
      product[i].id +
      `)" style="width: 16%;border-radius: 10px;"><i class="fa fa-trash" aria-hidden="true"></i></div>
<div class="btn btn-warning  text-white mr-2" onclick="UpdateProduct(` +
      product[i].id +
      `)" style="width: 16%;border-radius: 10px;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div> </td>
</tr>`;
    document.getElementById("prinfManagementProduct").innerHTML += prinfManage;
  }
}

function AddProduct() {
  var id = idupWatch;
  var name = document.getElementById("watchAddNameInput").value;
  var note = document.getElementById("watchAddNoteInput").value;
  var price = document.getElementById("watchAddPriceInput").value;
  var image2 = document.getElementById("watchAddImageInput").value;
  console.log(image2);
  var image = "images/" + image2.split("\\")[2];
  console.log(image);
  if (name != "" && price != "" && note != "" && image2 != "") {
    var pushWatch = {
      id,
      name,
      price,
      note,
      image,
    };
    product.push(pushWatch);
    localStorage.setItem("product", JSON.stringify(product));
    idupWatch++;
    localStorage.setItem("idupWatch", JSON.stringify(idupWatch));
    ManagementProduct();
    console.log(product);

    var name = (document.getElementById("watchAddNameInput").value = "");
    var note = (document.getElementById("watchAddNoteInput").value = "");
    var price = (document.getElementById("watchAddPriceInput").value = "");
    var image = (document.getElementById("watchAddImageInput").value = "");
  } else {
    alert("Vui lòng nhập đầy đủ thông tin");
  }
}

function DeleteProduct(id) {
  for (var i = 0; i < product.length; i++) {
    if (id == product[i].id) {
      product.splice(i, 1);

      localStorage.setItem("product", JSON.stringify(product));
      ManagementProduct();
    }
  }
}

function UpdateProduct(id) {
  for (var i = 0; i < product.length; i++) {
    if (id == product[i].id) {
      document.getElementById("button_add").style.display = "none";
      document.getElementById("button_update").style.display = "block";
      document.getElementById("txtId").value = product[i].id;
      document.getElementById("watchAddNameInput").value = product[i].name;
      document.getElementById("watchAddNoteInput").value = product[i].note;
      document.getElementById("watchAddPriceInput").value = product[i].price;
      document.getElementById("watchAddImageInput").value = product[i].image;
      break;
    }
  }
}

function SaveUpdateProduct() {
  var idchange = document.getElementById("txtId").value;

  for (var i = 0; i < product.length; i++) {
    if (idchange == product[i].id) {
      product[i].name = document.getElementById("watchAddNameInput").value;
      product[i].price = document.getElementById("watchAddPriceInput").value;
      product[i].note = document.getElementById("watchAddNoteInput").value;
      var imageChange = document.getElementById("watchAddImageInput").value;
      localStorage.setItem("product", JSON.stringify(product));
      if (imageChange == "") {
      } else {
        var image1 = "images/" + imageChange.split("\\")[2];
        product[i].image = image1;
      }

      if (product[i].type == 0 && imageChange != "") {
        product.splice(i, 1);
        localStorage.setItem("product", JSON.stringify(product));
        AddProduct();
        ManagementProduct();
      }
      ManagementProduct();
      break;
    }
  }

  document.getElementById("watchAddNameInput").value = "";
  document.getElementById("watchAddNoteInput").value = "";
  document.getElementById("watchAddPriceInput").value = "";
  document.getElementById("watchAddImageInput").value = "";
  // document.getElementById("addwatch").style.display = "block";
  // document.getElementById("updatewatch").style.display = "none";
}
//////////////////////////////////////////////////////////////////////////////
// Quản lí user
function ManagementUser() {
  document.getElementById("prinfManagementUser").innerHTML = "";
  var account = JSON.parse(localStorage.getItem("account"));
  for (let i = 0; i < account.length; i++) {
    var prinfManage =
      `<div class="col-4" style="height: 100px;padding:10px; padding-right:50px;">
<div class="user_info_admin float-left" style="width: 60%">
  <p class="font-weight-bold" style="font-size: 120%">` +
      account[i].username +
      `</p>
</div>
<div class="user_function_admin float-right" style="width: 40%;display: flex;">
<div class="btn btn-warning mr-1 text-white" onclick="editUserAdmin(` +
      account[i].id +
      `)" style="width: 40%;border-radius: 10px;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
  <div class="btn btn-danger text-white" onclick="deleteUser(` +
      account[i].id +
      `)" style="width: 40%;border-radius: 10px;"><i class="fa fa-trash" aria-hidden="true"></i></div>


</div></div>`;
    document.getElementById("prinfManagementUser").innerHTML += prinfManage;
  }
}

function AddUser() {
  var checkUsername = 0;
  var id = idup;
  var username = document.getElementById("userNameAddInput").value;
  var password = document.getElementById("passwordAddInput").value;
  var repassword = document.getElementById("rePasswordAddInput").value;
  var level = 0;
  if (
    username != "" &&
    password != "" &&
    repassword != "" &&
    password == repassword
  ) {
    for (let i = 0; i < account.length; i++) {
      if (account[i].username == username) {
        alert("tên tài khoản đã tồn tại");

        checkUsername = 1;
        break;
      }
    }
    if (checkUsername == 0) {
      accountSignupAdmin = {
        id,
        username,
        password,
        level,
      };
      account.push(accountSignupAdmin);
      localStorage.setItem("account", JSON.stringify(account));
      idup++;
      localStorage.setItem("idup", JSON.stringify(idup));
      console.log(account);
      alert("đăng ký tài khoản thành công");
      ManagementUser();
    }
  } else {
    alert("Đăng ký chưa thành công");
  }
}

function deleteUser(id) {
  var account = JSON.parse(localStorage.getItem("account"));
  for (var i = 0; i < account.length; i++) {
    if (id == account[i].id) {
      account.splice(i, 1);
      localStorage.setItem("account", JSON.stringify(account));
      ManagementUser();
      break;
    }
  }
}
