改动地址：

1: 分货卡板商品转移日志 /DC/AutoReplenishment/CardTransferLog, CardTransferLogList

2: { name: '城市补货订单详情', component: CityReplenishmentOrderDetail, path: '/DC/AutoReplenishment/CityReplenishmentOrderDetail/:id' }, ProductInfo

3: { name: '城市补货订单详情（草稿）', component: CityReplenishmentOrderDraft, path: '/DC/AutoReplenishment/CityReplenishmentOrderDraft/:id?' }, ProductList 和 AddProductModal 两处

4: { name: '总仓补货订单详情', component: DepotReplenishmentDetailContainer, path: '/DC/AutoReplenishment/DepotReplenishmentDetailV2' } ProductGather

5: name: '总仓补货订单详情(草稿)',
path: '/DC/AutoReplenishment/DepotReplenishmentDraftV2',

name: '总仓补货订单详情(草稿)',
component: DepotReplenishmentDraftContainer,
path: '/DC/AutoReplenishment/DepotReplenishmentDraftLimit',
AddProductModal.tsx

{ name: '总仓配货明细', component: DistributionDetails, path: '/DC/AutoReplenishment/DistributionDetails' },

6: { name: '商品起售时间配置详情', component: SaleTimeConfigDetail, path: '/DC/AutoReplenishment/SaleTimeConfigDetail/:id?' },

7: { name: '商品起售时间配置', component: LazySaleTimeConfigList, path: '/DC/AutoReplenishment/SaleTimeConfigList' },

8: { name: '波次详情', component: WaveDetails, path: '/DC/AutoReplenishment/Wave/Details' }, 三处

9: { name: '波次列表', component: LazyWaveListPage, path: '/DC/AutoReplenishment/Wave' },

10: { name: '创建波次', component: CreateWave, path: '/DC/AutoReplenishment/Wave/CreateWave' },

{ name: '创建波次(新)', component: LazyWaveCreatePage, path: '/DC/AutoReplenishment/Wave/CreateWaveV2' }, 创建第二步两处改动

11: { name: '自动补货日志', component: LazyAutoReplenishLogList, path: '/DC/AutoReplenishment/Log/List' }, AutoReplenishLogList

12: { name: 'DC 供应能力规划', component: SupplyCapacityList, path: '/DC/Supply/SupplyCapacity' },

{ name: '预定商品管理', component: BookingOrderConfig, path: '/Purchase/BookingOrder/BookingOrderConfig' },

14:{ name: '自动订货日志列表', component: LazyAutoPurchaseLogList, path: '/Purchase/AutoPurchase/Log/List' },

15: { name: '城市订单详情', component: LazyPurchaseOrderCityDetail, path: '/Purchase/PurchaseOrderCity/Detail' },
ProductInfosTabPanel 四处

16： { name: '城市订单', component: LazyPurchaseOrderCityList, path: '/Purchase/PurchaseOrderCity/Index' },

16: { name: '订货安全库存列表', component: LazyPurchaseSafeStockList, path: '/Purchase/SafeStock/List' },

17: { name: '召回创建', component: RecalledGoodsCreate, path: '/Purchase/RecalledGoods/Create' },
{ name: '召回列表', component: RecalledGoodsList, path: '/Purchase/RecalledGoods/List' },

18: 申请供应商售后服务 /Purchase/ReturnService/Create
召回单待确认 /Purchase/ReturnService/Create

19: {name: '品控质检记录', path: '/QualityCheck/List',}

19: 盘点计划管理(新) /Warehouse/InventoryManage/InventoryPlan
盘点明细 tab 选项 一处

19：盘点计划详情 /Warehouse/InventoryManage/InventoryPlan/Detail 盘点 sku 复核差异 盘点日志 三处

20: { name: '加工规则', component: ProcessingCreateOrEdit, path: '/Warehouse/InWarehouse/ProcessingManage/CreateOrEdit' },

21: { name: '库内加工管理', component: ProcessingManage, path: '/Warehouse/InWarehouse/ProcessingManage' },

22: { name: '总仓仓内补货', component: LazyInWarehouseReplenishmentList, path: '/Warehouse/InWarehouseReplenishment/Index' },

23: { name: '库位详情', component: LocationDetail, path: '/Warehouse/Location/Detail' },

23: { name: '整拆散详情', component: AutoDismountOrderDetail, path: '/Warehouse/AutoDismountOrder/Detail' }, 搜索条件 需重点测试

24: { name: '售后回库', component: LazyAfterSaleBackList, path: '/Warehouse/AfterSaleBack/Index' },

25: { name: '例外移库', component: LazyFreezingTransferring, path: '/Warehouse/FreezingTransferring/Index' },

26: { name: '商品上架', component: ProductsOnShelvesList, path: '/Warehouse/TallyOnShelves/Index' },

27: { name: '批次预警', component: BatchesWarning, path: '/DC/AutoReplenishment/BatchesWarning' },

{ name: '分货卡板商品转移日志', component: CardTransferLogList, path: '/DC/AutoReplenishment/CardTransferLog' },

29: { name: '调拨差异单列表', component: AllocationDifferenceDetail, path: '/Purchase/AllocationDifference/Detail' }, 出入两处

30: { name: '调拨差异单列表', component: AllocationDifferenceList, path: '/Purchase/AllocationDifference/Index' },

30: { name: '差异单汇总', component: AllocationDifferenceDetailList, path: '/Purchase/AllocationDifference/DetailList' },

31: { name: 'DC 调拨', component: AllocationToStore, path: '/Purchase/ProductAllocate/AllocationToStore' },

{ name: '门店调拨', component: StoreAllocateList, path: '/Purchase/ProductAllocate/Index' },

32: { name: '门店调拨创建', component: StoreAllocateCreate, path: '/Purchase/ProductAllocate/Create/:type/:id?' },

33: { name: '门店调拨入库', component: StoreAllocateList, path: '/Purchase/ProductAllocate/Index?type=StorageIn' },

34: { name: '总仓配货入库', component: StoreAllocateInList, path: '/Purchase/ProductAllocate/ProductAllocateInList' },

35: { name: '总仓配货出库', component: StoreAllocateOutList, path: '/Purchase/ProductAllocate/ProductAllocateOutList' },

36: { name: '入库详情', component: StorageDetail, path: '/Purchase/StorageAcceptance/StorageDetail' },

37: { name: '商品采购优惠价政策', component: ProductDiscount, path: '/Purchase/ProductDiscount/Index' }, 查询和创建两处

38: { name: '补货规则模板列表', component: LazyReplenishRuleTemplateList, path: '/DC/AutoReplenishment/RuleTemplateList' },

39: { name: '补货安全库存列表', component: LazyReplenishSafeStockList, path: '/DC/AutoReplenishment/SafeStock/List' },

{ name: '集分货作业监控', component: CollectionAndAllocationMonitor, path: '/DC/Monitor/CollectionAndAllocation' },

40: { name: '门店商品归属 DC 表', component: StoreProductBindDCList, path: '/DC/Supply/StoreProductBindDCList' }, 三处改动

42: { name: '整拆散详情', component: AutoDismountOrderDetail, path: '/Warehouse/AutoDismountOrder/Detail' }, 表单查询 searchItems

43：{ name: '商品加工模版', component: ProductProcessingTemplate, path: '/Warehouse/ProductProcessingTemplate/Index' }, 表单查询 searchItems
44: { name: '商品仓储信息待办', component: LazyStorageTodos, path: '/Warehouse/Storage/Todos' },

1： 新建盘点计划(第二步选择商品) /Warehouse/InventoryManage/InventoryPlan/Create

2： { name: '规则模板', component: ProdictRuleDetail, path: '/DC/AutoReplenishment/ProdictRuleDetail' },

3： { name: '创建加工模版', component: ProductProcessingTemplateAction, path: '/Warehouse/ProductProcessingTemplate/Create' },

4： 区域管理 /Warehouse/Storage/Area
