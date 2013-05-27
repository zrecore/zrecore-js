zrecore-js
==========

ZRECore.js - A RESTful interface to commonly used 'commerce' data models.


How to use
==========
Simply deploy on your favorite node stack, and run the app.js file. Then use HTTP GET/PUT/POST/DELETE methods on the end-points (such as /acl-permission or /item)

See the package.json file for dependencies.

How are data models related to each other?
==========
Our basic groups of models are organized in a straight-forward and simple manner (modify as you see fit). The idea is to think of the most
commonly used features, and provide a starting point with a basic set of data models:

 * AclPermission - A list of valid ACL Permissions, such as 'allow', 'deny', or something like 'create', 'read', 'update', 'delete'. An access control list associates a user with a resource, and (according to the user's role) specifies what permissions a user has.
 * AclResource - A list of things that we consider a resource, such as '/foo/some-page', or 'Some object'.
 * AclRole - A list of roles a user can have, such as 'editor', 'administrator', 'guest', etc...
 * Folder - Just like a real-life folder, this is used to organize/group pages and sub-folders.
 * Page - A page is a page ...is a page. This just holds content we would like to make viewable out at some point.
 * Item - As in, items for sale, or an item for rent. Something tangible we would like to offer, or perhaps something intangible, such as a software/media download.
  * ItemCoupon - A list of coupons that are available for a specific item.
  * ItemProperty - A list of additional properties that are associated with a specific item, such as "shoe sizes", or "available colors", etc. See the Property models below.
 * MerchantGateway - A list of merchant gateways our application will use. This is solely a list, you should implement your own usage of merchant gateways however you see fit, and simply use this list to keep track of what merchant gateways you use.
 * Order - A list of orders. An order simply contains some basic information about a sale, including items purchased, sale date, sale totals, services purchased, subscriptions subscribed to, etc...
  * OrderCoupon - A list of coupons that were applied to a specific order. This has fields to keep track of what coupon values were used, so that if a specific coupon is updated in the future, we still have an immutable historical reference.
  * OrderItem - A list of items that were purchased under a specific order.
  * OrderService - A list of services that were purchased under a specific order.
  * OrderStatusHistory - A historical list of status changes made to a specific order record, such as changing from 'placed' to 'pending', then to 'shipped', or whatever status you have defined in the 'Status' list of records.
  * OrderSubscription - A list of subscriptions associated with a specific order.
 * PackageLevel - This is associated with the Subscription and Service data models. Subscriptions and services can offer multiple packages, sometimes in order of most basic to most full featured. The PackageLevel model simply lists what these package levels are.
 * Property - A generic list of extra  properties we can associate with an Item data model object, such as 'shoe sizes', or 't-shirt color', etc...
  * PropertyType - A list of available 'types' we can assign to our Property objects.
  * PropertyValue - A list of available value(s) a specific PropertyType model can have.
 * Service - A list of services offered for sale, such as 'Tax consultation', or 'Landscaping', etc...
  * ServiceCoupon - A list of coupons available to a specific service.
  * ServicePackageLevel - A list of package levels available to a specific service.
 * Status - A list to help define what status an Order may have, such as 'pending', 'sold', 'rma begin', 'lost in space', or whatever you think are valid order history statuses.
 * Subscription - A list of available subscriptions you offer.
  * SubscriptionCoupon - A list of coupons available for a specific subscription.
  * SubscriptionPackageLevel - A list of package levels available for a specific subscription.
  * SubscriptionService - A list of service(s) available as part of a specific subscription. Kind of like how you can sign up something such as a gym membership subscription, and receive personal training, or a 10 days of kick-boxing lessons (as a service, not a punching bag).
 * User - A list of users that may access your application. This is usually used in conjunction with ACL data models to define who can (or can't) access certain resources, according to what permissions a user's role has on a resource.
  * UserAcl - A list defining what role is associated with a specific user, along with resources and permissions.
  * UserProfile - This is just a list containing common user 'profile' properties, such as 'twitter handle', or 'about me', etc.
