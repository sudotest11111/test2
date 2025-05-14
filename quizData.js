const quizData = [
  {
    id: 1,
 
    question: "AWSの共有責任モデルにおいて、AWSが責任を持つ項目はどれですか？（複数選択）",
    options: [
      "データセンターのセキュリティ",
      "物理サーバーの管理",
      "データの暗号化",
      "OSパッチの適用"
    ],
    correctAnswer: [0, 1, 3],
    explanation: "AWSは物理的なインフラのセキュリティや管理を担当し、OSパッチも提供します。一方、データの暗号化は利用者の責任です。",
    score: 15,
    category: "セキュリティとコンプライアンス"
  },
  {
    id: 2,
    question: "AWSクラウドの基本的な利点はどれですか？（複数選択）",
    options: [
      "オンデマンドのリソース提供",
      "使用量に応じた従量課金",
      "固定料金での利用",
      "スケーラビリティ"
    ],
    correctAnswer: [0, 1, 3],
    explanation: "AWSクラウドはオンデマンドリソースと従量課金を提供し、必要に応じたスケールが可能です。",
    score: 15,
    category: "クラウドの概念"
  },
  {
    id: 3,
    question: "Amazon S3の主な用途はどれですか？（複数選択）",
    options: [
      "オブジェクトストレージ",
      "高可用性のデータ保存",
      "仮想マシンのプロビジョニング",
      "ストレージクラスの自動移行"
    ],
    correctAnswer: [0, 1, 3],
    explanation: "Amazon S3はオブジェクトストレージであり、データの高可用性とストレージクラスの管理を提供します。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 4,
    question: "AWS Lambdaの特徴はどれですか？（複数選択）",
    options: [
      "コードをアップロードするだけで実行可能",
      "サーバーの管理が不要",
      "従量課金モデルの採用",
      "仮想ネットワークの設定が必要"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "AWS Lambdaはサーバーレスで、コードをアップロードするだけで動作し、利用時間に応じて課金されます。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 5,
    question: "AWS Identity and Access Management (IAM)で可能なことはどれですか？（複数選択）",
    options: [
      "ユーザーの権限管理",
      "リソースへのアクセス制御",
      "ネットワーク設定",
      "データのバックアップ管理"
    ],
    correctAnswer: [0, 1],
    explanation: "IAMはユーザーやリソースへのアクセス制御を管理するサービスです。",
    score: 15,
    category: "セキュリティとコンプライアンス"
  },
  {
    id: 6,
    question: "AWS Well-Architected Frameworkで推奨される設計原則はどれですか？（複数選択）",
    options: [
      "オンデマンドでのスケール",
      "単一障害点の排除",
      "プロビジョニングの手動化",
      "データの暗号化"
    ],
    correctAnswer: [0, 1, 3],
    explanation: "AWS Well-Architected Frameworkは、単一障害点の排除、オンデマンドスケール、セキュリティのベストプラクティス、高可用性を重視した設計原則を推奨しています。",
    score: 15,
    category: "クラウドの概念"
  },
  {
    id: 7,
    question: "Amazon RDSの主な利点はどれですか？（複数選択）",
    options: [
      "自動バックアップ",
      "マルチAZ配置",
      "アプリケーションコードの管理",
      "スケーラブルなデータベース"
    ],
    correctAnswer: [0, 1, 3],
    explanation: "Amazon RDSは自動バックアップ、マルチAZ配置、スケーラブルなデータベースを提供します。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 8,
    question: "Amazon EC2の特徴はどれですか？（複数選択）",
    options: [
      "仮想サーバーのプロビジョニング",
      "柔軟な料金モデル",
      "完全サーバーレス",
      "OSレベルでの制御"
    ],
    correctAnswer: [0, 1, 3],
    explanation: "Amazon EC2は仮想サーバーを提供し、柔軟な料金体系とOS制御を可能にします。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 9,
    question: "Amazon CloudFrontの用途はどれですか？（複数選択）",
    options: [
      "低レイテンシのコンテンツ配信",
      "エッジロケーションの活用",
      "仮想ネットワークの管理",
      "データのストレージ最適化"
    ],
    correctAnswer: [0, 1],
    explanation: "CloudFrontはエッジロケーションを使用して低レイテンシでコンテンツを配信します。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 10,
    question: "AWS Direct Connectの特徴はどれですか？（複数選択）",
    options: [
      "専用ネットワーク接続",
      "オンプレミスとAWSの接続",
      "仮想ネットワークの管理",
      "データ転送の低コスト化"
    ],
    correctAnswer: [0, 1, 3],
    explanation: "Direct Connectは、オンプレミスとAWSを専用回線で接続することで、高帯域幅、低レイテンシ、安定性の向上、低コストのデータ転送を実現します。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 11,
    question: "AWS Trusted Advisorの主な目的は何ですか？（複数選択）",
    options: [
      "コスト削減",
      "セキュリティの改善",
      "パフォーマンスの最適化",
      "データの暗号化"
    ],
    correctAnswer: [0, 1, 2],
    explanation: "Trusted Advisorはコスト、セキュリティ、パフォーマンスの改善を支援します。",
    score: 15,
    category: "セキュリティとコンプライアンス"
  },
  {
    id: 12,
    question: "AWS Elastic Load Balancerの主な特徴はどれですか？（複数選択）",
    options: [
      "トラフィック分散",
      "高可用性",
      "OSの制御",
      "スケーラビリティ"
    ],
    correctAnswer: [0, 1, 3],
    explanation: "Elastic Load Balancerはトラフィックを分散し、高可用性とスケーラビリティを提供します。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 13,
    question: "Amazon SQSの主な特徴はどれですか？（複数選択）",
    options: [
      "非同期メッセージング",
      "分散システムの統合",
      "リアルタイムストリーミング",
      "メッセージの一時保存"
    ],
    correctAnswer: [0, 1, 3],
    explanation: "Amazon SQSは非同期メッセージングを提供し、分散システムの統合を容易にし、メッセージを安全に保存します。これにより、システムのスケーラビリティと耐障害性が向上します。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 14,
    question: "AWSの料金モデルの特徴はどれですか？",
    options: [
      "従量課金制",
      "前払いが必須",
      "リソース使用量にかかわらず固定料金",
      "契約期間は1年のみ"
    ],
    correctAnswer: 0,
    explanation: "AWSは従量課金制を採用しており、使用したリソースの量に応じて課金されます。",
    score: 15,
    category: "請求、料金、およびサポート"
  },
  {
    id: 15,
    question: "AWS Configの主な用途はどれですか？",
    options: [
      "リソースの変更を記録する",
      "データのバックアップをスケジュールする",
      "仮想サーバーを管理する",
      "ネットワークトラフィックを監視する"
    ],
    correctAnswer: 0,
    explanation: "AWS Configはリソースの設定変更を記録し、コンプライアンス監視を行うためのサービスです。",
    score: 15,
    category: "セキュリティとコンプライアンス"
  },
  {
    id: 16,
    question: "Amazon RDSの主な利点はどれですか？",
    options: [
      "自動バックアップ",
      "データストレージの暗号化",
      "仮想マシンの作成",
      "ネットワークのスケール"
    ],
    correctAnswer: 0,
    explanation: "Amazon RDSは、自動バックアップやスケーラブルなデータベースを提供するフルマネージドなサービスです。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 17,
    question: "Amazon VPCの主な機能は何ですか？",
    options: [
      "AWS上で仮想ネットワークを構築",
      "データのスケーリング",
      "ストレージ最適化",
      "アプリケーションの暗号化"
    ],
    correctAnswer: 0,
    explanation: "Amazon VPCは仮想ネットワークの設定やセキュリティ管理を提供します。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 18,
    question: "AWS Well-Architected Frameworkの目的はどれですか？",
    options: [
      "高可用性、セキュリティ、スケーラビリティを提供",
      "アプリケーションのコード管理",
      "仮想ネットワークの構築",
      "データベースのバックアップ管理"
    ],
    correctAnswer: 0,
    explanation: "Well-Architected Frameworkは、高可用性、セキュリティ、スケーラビリティを重視した設計指針を提供します。",
    score: 15,
    category: "クラウドの概念"
  },
  {
    id: 19,
    question: "AWS Elastic Load Balancerの役割はどれですか？",
    options: [
      "トラフィック分散",
      "ネットワークの暗号化",
      "データのスケール",
      "アプリケーションコードの監視"
    ],
    correctAnswer: 0,
    explanation: "Elastic Load Balancerはトラフィック分散を行い、アプリケーションの可用性を向上させます。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 20,
    question: "AWS Trusted Advisorの主な目的はどれですか？",
    options: [
      "コスト最適化とセキュリティ改善",
      "データのバックアップ管理",
      "仮想ネットワークの設定",
      "アプリケーションのパフォーマンス最適化"
    ],
    correctAnswer: 0,
    explanation: "Trusted Advisorはコスト最適化、セキュリティ改善、パフォーマンス向上の支援を目的としています。",
    score: 15,
    category: "セキュリティとコンプライアンス"
  },
  {
    id: 21,
    question: "AWS Organizationsの特徴はどれですか？",
    options: [
      "複数アカウントの一元管理",
      "データストレージの暗号化",
      "仮想ネットワークの作成",
      "アプリケーションのスケーリング"
    ],
    correctAnswer: 0,
    explanation: "AWS Organizationsは、複数のAWSアカウントを一元的に管理できるサービスです。",
    score: 15,
    category: "セキュリティとコンプライアンス"
  },
  {
    id: 22,
    question: "AWS Backupの主な利点はどれですか？",
    options: [
      "バックアップの一元管理",
      "仮想マシンのスケーリング",
      "データの暗号化",
      "アプリケーションのデプロイ"
    ],
    correctAnswer: 0,
    explanation: "AWS Backupはバックアップの一元管理とスケジュール設定を提供します。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 23,
    question: "AWS Snowballの主な特徴はどれですか？",
    options: [
      "大容量データの物理的転送",
      "仮想マシンのプロビジョニング",
      "ストレージ最適化",
      "アプリケーションの暗号化"
    ],
    correctAnswer: 0,
    explanation: "AWS Snowballは、物理デバイスを使用して大容量データを高速に移行するサービスであり、従来のネットワーク転送よりも大幅な速度向上を実現します。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 24,
    question: "AWS Shieldの目的はどれですか？",
    options: [
      "DDoS攻撃からの保護",
      "アプリケーションのスケール",
      "ネットワークの最適化",
      "データストレージの暗号化"
    ],
    correctAnswer: 0,
    explanation: "AWS ShieldはDDoS攻撃からリソースを保護するためのサービスです。",
    score: 15,
    category: "セキュリティとコンプライアンス"
  },
  {
    id: 25,
    question: "Amazon S3 Glacierの用途はどれですか？",
    options: [
      "低頻度アクセスデータの長期保存",
      "リアルタイムストリーミング",
      "仮想マシンのスケール",
      "アプリケーションの監視"
    ],
    correctAnswer: 0,
    explanation: "S3 Glacierは長期間のデータ保存に適した低コストのストレージサービスです。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 26,
    question: "AWS Systems Managerの利点はどれですか？",
    options: [
      "リソースの集中管理と自動化",
      "データストレージの暗号化",
      "仮想マシンのバックアップ",
      "ネットワークの構築"
    ],
    correctAnswer: 0,
    explanation: "AWS Systems Managerはリソースの管理を集中化し、運用タスクを自動化します。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 27,
    question: "AWS CloudFormationの目的はどれですか？",
    options: [
      "リソースプロビジョニングの自動化",
      "データベーススケーリング",
      "アプリケーションコードの管理",
      "ネットワークトラフィックの監視"
    ],
    correctAnswer: 0,
    explanation: "CloudFormationはテンプレートを使用してAWSリソースのプロビジョニングを自動化します。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 28,
    question: "AWS Step Functionsの主な利点はどれですか？",
    options: [
      "サーバーレスワークフローのオーケストレーション",
      "データストレージの暗号化",
      "仮想ネットワークの構築",
      "アプリケーションスケーリング"
    ],
    correctAnswer: 0,
    explanation: "AWS Step Functionsはサーバーレス環境でのワークフロー管理を容易にします。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 29,
    question: "Amazon Elastic Transcoderの用途はどれですか？",
    options: [
      "動画と音声の形式変換",
      "データベーススケーリング",
      "仮想ネットワーク管理",
      "アプリケーションデプロイ"
    ],
    correctAnswer: 0,
    explanation: "Elastic Transcoderは動画や音声データを異なる形式やビットレートに変換するサービスです。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 30,
    question: "AWS Key Management Service (KMS) の目的はどれですか？",
    options: [
      "暗号化キーの管理",
      "仮想マシンのバックアップ",
      "ネットワークトラフィック管理",
      "データストレージの最適化"
    ],
    correctAnswer: 0,
    explanation: "AWS KMSは暗号化キーの安全な管理と制御を提供します。",
    score: 15,
    category: "セキュリティとコンプライアンス"
  },
  {
    id: 31,
    question: "Amazon CloudFrontの用途はどれですか？",
    options: [
      "低レイテンシのコンテンツ配信",
      "仮想ネットワーク管理",
      "アプリケーションコードの監視",
      "データストレージの最適化"
    ],
    correctAnswer: 0,
    explanation: "CloudFrontはエッジロケーションを使用してコンテンツ配信を最適化します。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 32,
    question: "AWS Elastic Beanstalkの利点はどれですか？",
    options: [
      "アプリケーションのデプロイと管理の簡略化",
      "仮想マシンのバックアップ",
      "データベーススケーリング",
      "ストレージの暗号化"
    ],
    correctAnswer: 0,
    explanation: "Elastic Beanstalkはアプリケーションデプロイと管理を簡素化するPaaSです。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 33,
    question: "AWS Trusted Advisorが提供するのはどれですか？",
    options: [
      "コスト最適化",
      "アプリケーションの監視",
      "仮想ネットワークの管理",
      "データストレージの暗号化"
    ],
    correctAnswer: 0,
    explanation: "Trusted Advisorはコスト削減、安全性向上、パフォーマンス最適化を支援します。",
    score: 15,
    category: "セキュリティとコンプライアンス"
  },
  {
    id: 34,
    question: "Amazon SQSの用途はどれですか？",
    options: [
      "非同期メッセージングの提供",
      "リアルタイムストリーミング",
      "ネットワークの暗号化",
      "データストレージの最適化"
    ],
    correctAnswer: 0,
    explanation: "SQSは分散システム間の非同期メッセージングを実現します。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 35,
    question: "Amazon EKS (Elastic Kubernetes Service) の主な利点はどれですか？",
    options: [
      "Kubernetesクラスターの管理",
      "仮想マシンのスケーリング",
      "ネットワーク管理",
      "データの暗号化"
    ],
    correctAnswer: 0,
    explanation: "Amazon EKSは、完全マネージドなKubernetesクラスターサービスです。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 36,
    question: "AWS Artifactの主な目的はどれですか？",
    options: [
      "セキュリティおよびコンプライアンス文書へのアクセス",
      "データストレージの暗号化",
      "仮想マシンのバックアップ",
      "ネットワークトラフィックの管理"
    ],
    correctAnswer: 0,
    explanation: "Artifactはセキュリティおよびコンプライアンス関連の文書へのアクセスを提供します。",
    score: 15,
    category: "セキュリティとコンプライアンス"
  },
  {
    id: 37,
    question: "AWS Glueの用途はどれですか？",
    options: [
      "ETLプロセスの簡略化",
      "仮想ネットワークの構築",
      "データベーススケーリング",
      "アプリケーションのスケーリング"
    ],
    correctAnswer: 0,
    explanation: "AWS Glueは、データ統合とETLプロセスを簡素化します。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 38,
    question: "AWS OpsWorksの主な機能はどれですか？",
    options: [
      "アプリケーションのライフサイクル管理",
      "仮想ネットワークの構築",
      "データストレージの暗号化",
      "アプリケーションのバックアップ"
    ],
    correctAnswer: 0,
    explanation: "OpsWorksはアプリケーションライフサイクルの管理を支援するサービスです。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 39,
    question: "AWS CodePipelineの主な目的はどれですか？",
    options: [
      "CI/CDの自動化",
      "データストレージの暗号化",
      "仮想マシンのバックアップ",
      "ネットワークの構築"
    ],
    correctAnswer: 0,
    explanation: "AWS CodePipelineは、コードの変更を自動的に取り込み、ビルド、テスト、デプロイといったプロセスを自動化するサービスです。これにより、継続的インテグレーション（CI）と継続的デリバリー（CD）の効率的な運用が可能になります。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 40,
    question: "AWS Step Functionsの利点はどれですか？",
    options: [
      "サーバーレスワークフローのオーケストレーション",
      "データストレージの暗号化",
      "仮想ネットワーク管理",
      "アプリケーションのスケール"
    ],
    correctAnswer: 0,
    explanation: "Step Functionsは、サーバーレス環境でのワークフロー管理を提供します。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 41,
    question: "AWS Elastic Load Balancerの特徴はどれですか？",
    options: [
      "トラフィックの分散",
      "ネットワークの暗号化",
      "データストレージの管理",
      "アプリケーションの監視"
    ],
    correctAnswer: 0,
    explanation: "Elastic Load Balancerはトラフィックを効率的に分散します。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 42,
    question: "AWS CloudTrailの目的はどれですか？",
    options: [
      "AWSリソース操作の履歴記録",
      "データベーススケーリング",
      "アプリケーションコードの管理",
      "ネットワークトラフィックの暗号化"
    ],
    correctAnswer: 0,
    explanation: "CloudTrailはリソース操作履歴を記録し、監査やコンプライアンスに役立ちます。",
    score: 15,
    category: "セキュリティとコンプライアンス"
  },
  {
    id: 43,
    question: "Amazon Kinesisの用途はどれですか？",
    options: [
      "リアルタイムデータストリーミング",
      "仮想ネットワークの構築",
      "データベースのスケーリング",
      "アプリケーションコードの監視"
    ],
    correctAnswer: 0,
    explanation: "Kinesisはリアルタイムでデータを収集・処理します。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 44,
    question: "AWS Snowball Edgeの主な利点はどれですか？",
    options: [
      "エッジ環境でのデータ処理と転送",
      "仮想ネットワーク管理",
      "データストレージの暗号化",
      "アプリケーションコードのスケール"
    ],
    correctAnswer: 0,
    explanation: "AWS Snowball Edgeは、大容量データをエッジ環境で転送・処理する機能に加え、エッジデバイスとしての計算機能を提供します。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 45,
    question: "Amazon QuickSightの用途はどれですか？",
    options: [
      "データの可視化と分析",
      "データベースのスケーリング",
      "仮想ネットワーク管理",
      "アプリケーションの暗号化"
    ],
    correctAnswer: 0,
    explanation: "QuickSightは、データを可視化し、分析するためのBIサービスです。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 46,
    question: "Amazon SageMakerの主な特徴はどれですか？",
    options: [
      "機械学習モデルの構築、トレーニング、デプロイ",
      "仮想マシンのスケーリング",
      "データベースの暗号化",
      "ネットワークトラフィックの管理"
    ],
    correctAnswer: 0,
    explanation: "Amazon SageMakerは機械学習モデルを構築、トレーニング、デプロイするためのフルマネージドサービスです。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 47,
    question: "AWS Global Acceleratorの利点はどれですか？",
    options: [
      "グローバルな低レイテンシアクセスの提供",
      "仮想マシンのスケーリング",
      "データストレージの暗号化",
      "アプリケーションの監視"
    ],
    correctAnswer: 0,
    explanation: "Global Acceleratorはグローバルアプリケーションへの低レイテンシアクセスを提供します。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 48,
    question: "Amazon Rekognitionの用途はどれですか？",
    options: [
      "画像や動画の分析",
      "データベースのスケーリング",
      "仮想ネットワークの管理",
      "データストレージの最適化"
    ],
    correctAnswer: 0,
    explanation: "Amazon Rekognitionは画像や動画の解析を行い、顔認識や物体検出を可能にします。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 49,
    question: "AWS WAF（Web Application Firewall）の目的はどれですか？",
    options: [
      "ウェブアプリケーションを攻撃から保護",
      "仮想マシンのスケーリング",
      "データストレージの暗号化",
      "アプリケーションコードの管理"
    ],
    correctAnswer: 0,
    explanation: "AWS WAFはSQLインジェクションやクロスサイトスクリプティング（XSS）などの攻撃からウェブアプリケーションを保護します。",
    score: 15,
    category: "セキュリティとコンプライアンス"
  },
  {
    id: 50,
    question: "AWS Personal Health Dashboardの主な機能はどれですか？",
    options: [
      "AWSリソースの健康状態に関する通知",
      "仮想マシンのバックアップ",
      "データベーススケーリング",
      "ネットワークの最適化"
    ],
    correctAnswer: 0,
    explanation: "AWS Personal Health DashboardはAWSリソースの健康状態に関する情報を提供します。",
    score: 15,
    category: "セキュリティとコンプライアンス"
  },
  {
    id: 51,
    question: "AWS Storage Gatewayの用途はどれですか？",
    options: [
      "オンプレミスとクラウドのハイブリッドストレージ",
      "仮想マシンのスケーリング",
      "データストレージの暗号化",
      "アプリケーションの監視"
    ],
    correctAnswer: 0,
    explanation: "Storage Gatewayはオンプレミスとクラウドの統合ストレージソリューションを提供します。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 52,
    question: "AWS Batchの主な利点はどれですか？",
    options: [
      "バッチ処理ジョブの実行と管理",
      "仮想マシンのスケーリング",
      "データベースの暗号化",
      "ネットワークトラフィックの管理"
    ],
    correctAnswer: 0,
    explanation: "AWS Batchは大規模なバッチ処理ジョブを効率的に管理するサービスです。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 53,
    question: "Amazon FSxの特徴はどれですか？",
    options: [
      "フルマネージドファイルシステムの提供",
      "データストレージの暗号化",
      "仮想ネットワークの管理",
      "アプリケーションコードの監視"
    ],
    correctAnswer: 0,
    explanation: "Amazon FSxはWindows File ServerやLustreなどのフルマネージドファイルシステムを提供します。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 54,
    question: "Amazon Pollyの用途はどれですか？",
    options: [
      "テキストを自然な音声に変換",
      "データストレージの暗号化",
      "仮想マシンのバックアップ",
      "アプリケーションコードの監視"
    ],
    correctAnswer: 0,
    explanation: "Amazon Pollyはテキストを音声に変換するためのサービスです。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 55,
    question: "AWS Transit Gatewayの利点はどれですか？",
    options: [
      "複数VPCとオンプレミスネットワークの接続管理",
      "仮想マシンのスケーリング",
      "データストレージの暗号化",
      "ネットワークトラフィックの最適化"
    ],
    correctAnswer: 0,
    explanation: "Transit Gatewayは複数のVPCやオンプレミスネットワークを効率的に接続管理します。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 56,
    question: "AWS CodeCommitの主な機能はどれですか？",
    options: [
      "ソースコードのバージョン管理",
      "仮想ネットワークの管理",
      "アプリケーションスケール",
      "データベーススケーリング"
    ],
    correctAnswer: 0,
    explanation: "CodeCommitはGit互換のリポジトリでソースコードのバージョン管理を行うサービスです。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 57,
    question: "AWS Outpostsの特徴はどれですか？",
    options: [
      "オンプレミス環境でAWSサービスを利用可能にする",
      "仮想ネットワークの構築",
      "データストレージの暗号化",
      "アプリケーションのスケーリング"
    ],
    correctAnswer: 0,
    explanation: "OutpostsはオンプレミスでAWSインフラとサービスを提供するためのソリューションです。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 58,
    question: "Amazon Elastic File System（EFS）の主な利点はどれですか？",
    options: [
      "複数EC2インスタンスからの同時アクセス可能なストレージ",
      "データベーススケーリング",
      "仮想ネットワークの管理",
      "アプリケーションの監視"
    ],
    correctAnswer: 0,
    explanation: "EFSは複数のEC2インスタンスから同時アクセス可能なファイルストレージを提供します。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 59,
    question: "Amazon Athenaの用途はどれですか？",
    options: [
      "Amazon S3データへのSQLクエリ実行",
      "仮想ネットワークの管理",
      "データベースの暗号化",
      "アプリケーションコードのスケーリング"
    ],
    correctAnswer: 0,
    explanation: "AthenaはAmazon S3のデータに対してSQLクエリを実行し、分析を行うサービスです。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 60,
    question: "AWS X-Rayの主な機能はどれですか？",
    options: [
      "分散アプリケーションのトレース",
      "仮想マシンのスケーリング",
      "データストレージの暗号化",
      "ネットワークトラフィックの最適化"
    ],
    correctAnswer: 0,
    explanation: "X-Rayは分散アプリケーションのトレースを行い、パフォーマンスの問題を特定します。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 61,
    question: "AWS Control Towerの主な利点はどれですか？",
    options: [
      "マルチアカウント環境のセットアップと管理を簡素化",
      "データベースのスケーリング",
      "仮想ネットワークの最適化",
      "アプリケーションのスケーリング"
    ],
    correctAnswer: 0,
    explanation: "Control Towerはマルチアカウント環境のセットアップと管理を簡素化します。",
    score: 15,
    category: "セキュリティとコンプライアンス"
  },
  {
    id: 62,
    question: "AWS IoT Coreの用途はどれですか？",
    options: [
      "IoTデバイスの接続と管理",
      "仮想ネットワークの管理",
      "データベースのスケーリング",
      "アプリケーションの監視"
    ],
    correctAnswer: 0,
    explanation: "AWS IoT CoreはIoTデバイスをクラウドに接続し、データ管理を容易にするサービスです。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 63,
    question: "AWS CodePipelineの特徴はどれですか？",
    options: [
      "CI/CDワークフローの自動化",
      "データストレージの暗号化",
      "仮想マシンのバックアップ",
      "ネットワークの管理"
    ],
    correctAnswer: 0,
    explanation: "CodePipelineは継続的インテグレーションとデリバリーを自動化するサービスです。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 64,
    question: "AWS Step Functionsの用途はどれですか？",
    options: [
      "サーバーレスワークフローのオーケストレーション",
      "仮想ネットワークの管理",
      "データストレージの暗号化",
      "アプリケーションのスケーリング"
    ],
    correctAnswer: 0,
    explanation: "Step Functionsはワークフローをサーバーレス環境で簡単に設計、管理するためのサービスです。",
    score: 15,
    category: "クラウドテクノロジー"
  },
  {
    id: 65,
    question: "AWS Elastic Load Balancerの役割はどれですか？",
    options: [
      "トラフィックを複数のターゲットに分散",
      "仮想ネットワークの管理",
      "データストレージの暗号化",
      "アプリケーションコードのスケーリング"
    ],
    correctAnswer: 0,
    explanation: "Elastic Load Balancerはトラフィックを分散してアプリケーションの可用性を向上させます。",
    score: 15,
    category: "クラウドテクノロジー"
  }
];
