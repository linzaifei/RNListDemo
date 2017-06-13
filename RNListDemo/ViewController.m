//
//  ViewController.m
//  RNListDemo
//
//  Created by xsy on 2017/6/9.
//  Copyright © 2017年 林再飞. All rights reserved.
//

#import "ViewController.h"
#import <React/RCTRootView.h>
#import <React/RCTBundleURLProvider.h>

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    //localhost
    //192.168.62.59
   
    NSURL *jsCodeLocation = [NSURL
                             URLWithString:@"http://192.168.62.59:8081/index.ios.bundle?platform=ios"];
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation moduleName:@"RNListDemo" initialProperties:nil launchOptions:nil];
    
    self.view = rootView;
    
}





- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
