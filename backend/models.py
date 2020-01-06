from django.db import models


class Test(models.Model):
    """测试数据表"""
    title = models.CharField(max_length=50, verbose_name='title')
    author = models.CharField(max_length=20, verbose_name='author')

    class Meta:
        verbose_name = '测试数据表'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.title
