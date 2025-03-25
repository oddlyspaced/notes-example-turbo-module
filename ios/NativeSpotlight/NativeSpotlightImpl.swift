//
//  NativeSpotlightImpl.swift
//  NotesExampleTurboModule
//
//  Created by Hardik Srivastava on 25/03/25.
//

import Foundation
import CoreSpotlight

@objcMembers class NativeSpotlightImpl: NSObject {
  func indexItem(_ id: String, title: String, subTitle: String) {
    let attributeSet = CSSearchableItemAttributeSet(contentType: .item)
    attributeSet.keywords = ["Notes"]
    attributeSet.title = title
    attributeSet.contentDescription = subTitle
    attributeSet.creator = "oddlyspaced"
    attributeSet.subject = "Note"
    attributeSet.displayName = title
    let thumbnailUrl = "https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png"
    guard let url = URL(string: thumbnailUrl) else { return }
    do {
      let data = try Data(contentsOf: url)
      let thumbail = UIImage(data: data)
      attributeSet.thumbnailData = thumbail?.pngData();
    }
    catch {
      return
    }
    let item = CSSearchableItem(uniqueIdentifier: id, domainIdentifier: "app_note", attributeSet: attributeSet)
    CSSearchableIndex.default().indexSearchableItems([item]) {
      (error) in
      if let error = error {
      }
      else {
      }
    }
  }
  
  func clearIndex() {
    CSSearchableIndex.default().deleteSearchableItems(withDomainIdentifiers: ["app_note"]) {
      (error) in
      if let error = error {
      }
      else {
      }
    }
  }
}
