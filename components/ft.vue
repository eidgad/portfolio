<template>
  <div class="contact">
    <h3 class="justify-content-center">Contacts:</h3>
    <div
      class="spans d-flex flex-row justify-content-center gap-sm-2 align-items-baseline"
    >
      <span
        ><a
          href="https://www.facebook.com/profile.php?id=100003828019658"
          target="_blank"
          rel="noopener noreferrer"
          >F</a
        ></span
      >
      <span
        ><a
          href="https://www.linkedin.com/in/eid-mohamed-754733198"
          target="_blank"
          rel="noopener noreferrer"
          >L</a
        ></span
      >
      <span><a href="https://github.com/eidgad">G</a></span>
      <span><a href="mailto:mrlbasiony@gmail.com">G</a></span>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  .contact {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 5px #14213d;
    width: 100%;
    padding: 10px;
    text-align: center;
  }
  .contact > h3 {
    transition: all 2s ease;
  }
  .contact:hover > h3 {
    color: #c1221f;
  }
  .contact > .spans {
    width: 30%;
  }
  @media (min-width: 362px) {
    .contact > .spans {
      width: 50%;
      gap: 5px;
    }
  }
  .contact > .spans > span {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    text-align: center;
    line-height: 20px;
    font-size: 15px;
    border-radius: 50%;
    color: #ffffff;
    cursor: pointer;
    transition: all 2s;
  }
  .contact > .spans > span:hover {
    transform: scale(1.5);
    box-shadow: 1px 1px 5px #c1221f;
  }

  .contact > .spans > span:nth-child(1) {
    background-color: #3b5998;
  }
  .contact > .spans > span:nth-child(2) {
    background-color: #1da1f2;
  }
  .contact > .spans > span:nth-child(3) {
    background-color: #14213d;
  }
  .contact > .spans > span:last-child {
    background-color: #c1221f;
  }
  .contact > .spans > span > a {
    color: #ffffff !important;
  }
</style>
