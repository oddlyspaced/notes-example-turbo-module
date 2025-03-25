//
//  NativeSpotlight.m
//  NotesExampleTurboModule
//
//  Created by Hardik Srivastava on 25/03/25.
//

#import "NativeSpotlight.h"
#import "NotesExampleTurboModule-Swift.h"

@implementation NativeSpotlight

RCT_EXPORT_MODULE()

NativeSpotlightImpl *nativespotlightimpl = [[NativeSpotlightImpl alloc] init];


- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params {
  return std::make_shared<facebook::react::NativeSpotlightSpecJSI>(params);
}

- (void)clearIndex {
  return [nativespotlightimpl clearIndex];
}

- (void)indexItem:(nonnull NSString *)id title:(nonnull NSString *)title subTitle:(nonnull NSString *)subTitle {
  return [nativespotlightimpl indexItem:id title:title subTitle:subTitle];
}

@end
