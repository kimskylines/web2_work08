window.onload = function()
{
	var new_products = document.getElementById("new_products");
	var arrLI = new_products.children;
	for(var i=0; i<arrLI.length; i++)
	{
		arrLI[i].onmouseover = (function()
		{
			console.log("商品名称");
		})(i);
		arrLI[i].onmouseout = function()
		{
			
		}
	}
}
