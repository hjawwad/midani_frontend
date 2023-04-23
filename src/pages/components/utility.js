import Swal from 'sweetalert2';

export const showErrorAlert = (errorMessage) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: errorMessage,
    });
  }

export const showSuccessAlert = (successMessage) => {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: successMessage,
    });
  }