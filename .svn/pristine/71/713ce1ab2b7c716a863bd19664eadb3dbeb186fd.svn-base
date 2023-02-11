/**
 * 2021-6-20
 * yujiahe
 * 分享配置
 */

export default{
    data(){
        return {
            //设置默认的分享参数
            share:{
                title:'一猿亿码', //分享头部参数
                path:'/pages/index/index',  //进入的页面
                imageUrl:'', //封面图片
                desc:'',
                content:''
            }
        }
    },
    onShareAppMessage(res) {
        return {
            title:this.share.title,
            path:this.share.path,
            imageUrl:this.share.imageUrl,
            desc:this.share.desc,
            content:this.share.content,
            success(res){
                uni.showToast({
                    title:'分享成功'
                })
            },
            fail(res){
                uni.showToast({
                    title:'分享失败',
                    icon:'none'
                })
            }
        }
    }
}