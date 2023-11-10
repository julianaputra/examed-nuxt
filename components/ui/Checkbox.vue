<template>
  <label class="checkbox-wrapper"
    ><slot></slot>
    <input type="checkbox" />
    <span class="checkmark"></span>
  </label>
</template>

<style lang="scss" scoped>
/* The checkbox-wrapper */
.checkbox-wrapper {
  display: block;
  position: relative;
  padding-left: 32px;
  cursor: pointer;
  font-size: 18px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-bottom: 10px;
  color: rgba(18, 32, 50, 0.8);
}

/* Hide the browser's default checkbox */
.checkbox-wrapper input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 24px;
  width: 24px;
  background-color: #fff;
  border: 1px solid #c2c2c2;
  border-radius: 4px;
}

/* When the checkbox is checked, add a blue background */
.checkbox-wrapper input:checked ~ .checkmark {
  background-color: #303178;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M20.0486 6.35147C20.5173 6.8201 20.5173 7.5799 20.0486 8.04853L10.4486 17.6485C9.98 18.1172 9.2202 18.1172 8.75157 17.6485L3.95157 12.8485C3.48294 12.3799 3.48294 11.6201 3.95157 11.1515C4.4202 10.6828 5.18 10.6828 5.64863 11.1515L9.6001 15.1029L18.3516 6.35147C18.8202 5.88284 19.58 5.88284 20.0486 6.35147Z' fill='white'/%3E%3C/svg%3E");
}

/* Show the checkmark when checked */
.checkbox-wrapper input:checked ~ .checkmark:after {
  display: block;
}
</style>
