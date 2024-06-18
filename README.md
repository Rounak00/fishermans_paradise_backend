API's that are tested in Postman : - 

  HealthCheck : localhost:5000/api/health/
  
  Authentication:
        1. Customer_Register => localhost:5000/api/auth/customer/register
        2. Admin_Register => localhost:5000/api/auth/admin/register
        3. Customer_login => localhost:5000/api/auth/customer/login
        4. Admin_Login =>  localhost:5000/api/auth/admin/login
        5. Fisherman_Register => localhost:5000/api/auth/fisherman/register
        6. Fisherman_Login => localhost:5000/api/auth/fisherman/login
	Admin : 
				1. Admin_profile => localhost:5000/api/admin/
				2. Admin_FishermanList => localhost:5000/api/admin/fishermansList
				3. Admin_ApprovedFishermanList => localhost:5000/api/admin/approvedFishermansList
				4. Admin_NotApproverFishermanList => localhost:5000/api/admin/notApprovedFishermansList
				5. admin_markApproved => localhost:5000/api/admin/markApproved/:id
				6. Admin_markNotApproved => localhost:5000/api/admin/markNotApproved/:id",

  Fisherman :
        1. Fisherman_Profile => localhost:5000/api/fisherman/profile
		    2. Fisherman_addProduct => localhost:5000/api/fisherman/addProduct
		    3. Fisherman_removeProduct => localhost:5000/api/fisherman/removeProduct/id
        4. Fisherman_updateProduct => localhost:5000/api/fisherman/updateProduct/:id
        5. GetAllProducts => localhost:5000/api/fisherman/getMyProducts

  Customer :
        1. Customer_Profile => localhost:5000/api/profile
        2. Customer_UpdateProfile => localhost:5000/api/updateProfile
        3. Customer_SearchProduct => localhost:5000/api/searchProduct?search=ruhi
        4. Customer_Products => localhost:5000/api/products
        5. Customer_AddOrder => localhost:5000/api/addOrder/:id?stat=Delivered&quantity=10
				6. Customer_ShowOrder => localhost:5000/api/showOrder
        7. Cstomer_ShowCart => localhost:5000/api/showCart
        8. Customer_AddCart => localhost:5000/api/addCart/:id
        9. Customer_RemoveCart => localhost:5000/api/removeCart/:id
        10. Customer_Buy => localhost:5000/api/buy/:id
        11. Customer_Product => localhost:5000/api/product/:id
