(function () {
	$(document).ready(function () {

		$("#table1").on('click', '.delete', function () {
			$(this).closest('tr').remove();
		});


		
			$('.btnCheck').change(function () {
				$('.btnCheck').val($(this).is(':checked'));
				
			});

			$('.btnCheck').click(function () {
				if (!$(this).is(':checked')) {
					return confirm("Are you sure? you want to uncheck");
				}
			});
		});

		//deletProduct(user)
	
})();