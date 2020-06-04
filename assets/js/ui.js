$(document).ready(function(){
	
	// px 단위로 이미지 비율 계산
	var $image_width_before = $("#image_width_before");
	var $image_height_before = $("#image_height_before");
	var $image_before = $("input[name='image_before']");
	var $image_width_after = $("#image_width_after");
	var $image_height_after = $("#image_height_after");
	var $image_after = $("input[name='image_after']");

	$image_after.on("propertychange change keyup paste",function(){
		if($image_before != null) {
			var el = $(this);

			if (el.attr("id") == "image_width_after"){
				var width_value = $image_width_after.val();
				var height_value = Math.round($image_height_before.val() * width_value / $image_width_before.val());

				$image_height_after.val(height_value);
			}


		}
	});
});
