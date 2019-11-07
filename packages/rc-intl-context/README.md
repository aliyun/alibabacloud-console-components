# @alicloud/console-components-intl-context

> 用户请使用@alicloud/console-components-intl，不需要了解@alicloud/console-components-intl-context。

@alicloud/console-components-intl内部依赖。@alicloud/console-components-intl使用它提供的React Context。

为什么要把Content从intl分离出来呢？因为用户可能会安装多个版本的@alicloud/console-components-intl，如果每个版本都有一个content的话，它们的context是完全隔离、不互通的。
抽离出@alicloud/console-components-intl-context以后，由于它的版本几乎不会变，所以不同版本的@alicloud/console-components-intl会依赖于相同的@alicloud/console-components-intl-context，从而在context上是互通的。


