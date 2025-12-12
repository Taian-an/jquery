$(document).ready(function () {

    $("#submitBtn").click(function () {

        // 清空原本的錯誤訊息 & 紅框
        $(".error-text").text("");
        $("input").removeClass("input-error");
        $("#topicError").text("");
        $("#genderError").text("");

        let isValid = true;

        // 1. 檢查必填欄位
        function checkEmpty(id) {
            if ($(id).val().trim() === "") {
                $(id).addClass("input-error");
                $(id).after("<div class='error-text'>this field must not be empty</div>");
                isValid = false;
            }
        }

        checkEmpty("#username");
        checkEmpty("#email");
        checkEmpty("#password");
        checkEmpty("#confirmPassword");

        // 2. Topics - 至少選一個
        if ($(".topic:checked").length === 0) {
            $("#topicError").text("At least one topic must be selected");
            isValid = false;
        }

        // 3. Gender 不可選 --
        if ($("#gender").val() === "--") {
            $("#genderError").text("please choose your gender");
            isValid = false;
        }

        // 4. Confirm password 是否一致
        if ($("#password").val() !== $("#confirmPassword").val()) {
            $("#confirmPassword").addClass("input-error");
            $("#confirmPassword").after("<div class='error-text'>confirmed password mismatched the password</div>");
            isValid = false;
        }

        // 全部通過
        if (isValid) {
            alert("Form submitted successfully!");
        }
    });

});
