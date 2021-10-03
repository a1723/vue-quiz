<template>
     <!--HEADER-->

      <header class="p-3 bg-dark text-white">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="/" class="nav-link px-3 text-white">To the begining of the quiz</a></li>
              <li><a href="/questionsResults" class="nav-link px-3 text-white">Results</a></li>
              <li><a href="#" class="nav-link px-3 text-white">About quiz</a></li>
            </ul>

            <!-- <div class="text-end">
              <button class="btn btn-outline-light me-3 btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>
              <button type="button" class="btn btn-warning">Sign-up</button>
            </div> -->
          </div>


    <!--MODAL-->

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-bs-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button class="btn-close" data-bs-dismiss="modal" aria-bs-label="close"></button>
              </div>
              <div class="modal-body">
                  <form>
                      <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                      </div>
                      <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1">
                      </div>
                      <div class="mb-3 form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1">
                          <label class="form-check-label" for="exampleCheck1">Check me out</label>
                      </div>
                      <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
              </div>
          </div>
      </div>
  </div>

      <!--MODAL-->

      </header>

      <!--HEADER-->
</template>

<script>
export default {
    name: 'mainHeader',
    props: {},
    data() {
        return {
            mainHeader: 'mainHeader'
        }
    }
}
</script>

<style scoped>


</style>
